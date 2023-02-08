package com.ssafy.live.account.user.service;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.auth.security.SecurityUtil;
import com.ssafy.live.account.common.domain.Authority;
import com.ssafy.live.account.common.dto.CommonResponse;
import com.ssafy.live.account.common.service.EmailService;
import com.ssafy.live.account.common.service.S3Service;
import com.ssafy.live.account.user.controller.dto.UserRequest;
import com.ssafy.live.account.user.controller.dto.UserRequest.FindPassword;
import com.ssafy.live.account.user.controller.dto.UserRequest.IdDuplcate;
import com.ssafy.live.account.user.controller.dto.UserRequest.Update;
import com.ssafy.live.account.user.controller.dto.UserResponse;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final Response response;
    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;
    private final EmailService emailService;
    private final S3Service s3Service;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<?> signUp(UserRequest.SignUp signUp, MultipartFile file)
        throws IOException {
        if (usersRepository.existsById(signUp.getId())) {
            return response.fail("이미 회원가입된 아이디입니다.", HttpStatus.BAD_REQUEST);
        }

        String imgSrc = s3Service.upload(file);
        Users users = Users.builder()
                .id(signUp.getId())
                .password(passwordEncoder.encode(signUp.getPassword()))
                .name(signUp.getName())
                .email(signUp.getEmail())
                .phone(signUp.getPhone())
                .region(signUp.getRegion())
                .gender(signUp.getGender())
                .imageSrc(imgSrc)
                .score((float)36.5)
                .roles(Collections.singletonList(Authority.ROLE_USER.name()))
                .build();
        usersRepository.save(users);

        return response.success("회원가입에 성공했습니다.");
    }

    public ResponseEntity<?> login(UserRequest.Login login) {
        if (usersRepository.findById(login.getId()).orElse(null) == null) {
            return response.fail("해당하는 유저가 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        UsernamePasswordAuthenticationToken authenticationToken = login.toAuthentication();
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        CommonResponse.TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        redisTemplate.opsForValue()
                .set("RT:" + authentication.getName(), tokenInfo.getRefreshToken(), tokenInfo.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);

        return response.success(tokenInfo, "로그인에 성공했습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> reissue(UserRequest.Reissue reissue) {
        if (!jwtTokenProvider.validateToken(reissue.getRefreshToken())) {
            return response.fail("Refresh Token 정보가 유효하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        Authentication authentication = jwtTokenProvider.getAuthentication(reissue.getAccessToken());
        String refreshToken = (String)redisTemplate.opsForValue().get("RT:" + authentication.getName());

        if(ObjectUtils.isEmpty(refreshToken)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }

        if(!refreshToken.equals(reissue.getRefreshToken())) {
            return response.fail("Refresh Token 정보가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        CommonResponse.TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        redisTemplate.opsForValue()
                .set("RT:" + authentication.getName(), tokenInfo.getRefreshToken(), tokenInfo.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);

        return response.success(tokenInfo, "Token 정보가 갱신되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> logout(UserRequest.Logout logout) {
        if (!jwtTokenProvider.validateToken(logout.getAccessToken())) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }

        Authentication authentication = jwtTokenProvider.getAuthentication(logout.getAccessToken());

        if (redisTemplate.opsForValue().get("RT:" + authentication.getName()) != null) {
            redisTemplate.delete("RT:" + authentication.getName());
        }

        Long expiration = jwtTokenProvider.getExpiration(logout.getAccessToken());
        redisTemplate.opsForValue()
                .set(logout.getAccessToken(), "logout", expiration, TimeUnit.MILLISECONDS);

        return response.success("로그아웃 되었습니다.");
    }

    public ResponseEntity<?> withdrawl(UserRequest.withdrawl withdrawl) {
        Optional<Users> users = usersRepository.findById(withdrawl.getNo());
        if(users.isPresent()) {
            usersRepository.deleteById(withdrawl.getNo());
            return response.success("회원탈퇴 되었습니다.");
        }
        return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<?> authority() {
        // SecurityContext에 담겨 있는 authentication userId 정보
        String userId = SecurityUtil.getCurrentUserId();

        Users users = usersRepository.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException("No authentication information."));

        // add ROLE_USER
        users.getRoles().add(Authority.ROLE_USER.name());
        usersRepository.save(users);

        return response.success();
    }

    public ResponseEntity<?> temporaryPassword(FindPassword request) {
        Users user = usersRepository.findByEmailAndId(request.getEmail(), request.getId());
        if(user == null) {
            return response.fail("해당하는 사용자 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        String temporaryPwd = user.generateRandomPassword();
        user.updatePassword(passwordEncoder.encode(temporaryPwd));
        usersRepository.save(user);
        emailService.joinEmail(user.getEmail(), temporaryPwd, user.getName());
        return response.success("비밀번호 찾기 이메일을 전송하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> idDuplicate(IdDuplcate idDuplcate) {
        if(usersRepository.existsById(idDuplcate.getId())) {
            return response.success(false, "이미 사용 중인 아이디입니다.", HttpStatus.OK);
        }
        return response.success(true, "사용 가능한 아이디입니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> updateRealtor(Long userNo, Update request, MultipartFile file)
        throws IOException {
        Users user = usersRepository.findById(userNo).get();
        if(user == null) {
            return response.fail("해당하는 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        String preImg = user.getImageSrc();
        if(file != null) {
            s3Service.deleteFile(preImg);
        }
        String imgSrc = s3Service.upload(file);
        user.updateUser(request, passwordEncoder.encode(request.getPassword()), imgSrc);
        usersRepository.save(user);
        UserResponse.Update updateUser = UserResponse.Update.builder()
            .phone(user.getPhone())
            .email(user.getEmail())
            .imageSrc(user.getImageSrc())
            .region(user.getRegion())
            .build();
        return response.success(updateUser, "회원 정보 수정을 완료했습니다.", HttpStatus.OK);
    }
}
