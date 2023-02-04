package com.ssafy.live.account.realtor.service;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.auth.security.SecurityUtil;
import com.ssafy.live.account.common.domain.Authority;
import com.ssafy.live.account.common.dto.CommonResponse;
import com.ssafy.live.account.common.service.EmailService;
import com.ssafy.live.account.common.service.S3Service;
import com.ssafy.live.account.realtor.controller.dto.RealtorProjectionInterface;
import com.ssafy.live.account.realtor.controller.dto.RealtorRequest;
import com.ssafy.live.account.realtor.controller.dto.RealtorResponse;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.domain.repository.RegionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.JpaSort;
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

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class RealtorService {

    private final S3Service s3Service;
    private final RealtorRepository realtorRepository;
    private final PasswordEncoder passwordEncoder;
    private final Response response;
    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;
    private final RegionRepository regionRepository;
    private final EmailService emailService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<?> signUp(RealtorRequest.SignUp signUp, MultipartFile file)
        throws IOException {
        if (realtorRepository.existsByBusinessNumber(signUp.getBusinessNumber())) {
            return response.fail("이미 회원가입된 중개사번호입니다.", HttpStatus.BAD_REQUEST);
        }
        String imgSrc = s3Service.upload(file);
        Realtor realtor = Realtor.builder()
            .password(passwordEncoder.encode(signUp.getPassword()))
            .name(signUp.getName())
            .email(signUp.getEmail())
            .phone(signUp.getPhone())
            .corp(signUp.getCorp())
            .description(signUp.getDescription())
            .businessNumber(signUp.getBusinessNumber())
            .businessAddress(signUp.getBusinessAddress())
            .startDate(signUp.getStartDate())
            .registrationNumber(signUp.getRegistrationNumber())
            .imageSrc(imgSrc)
            .roles(Collections.singletonList(Authority.ROLE_REALTOR.name()))
            .build();
        realtorRepository.save(realtor);

        return response.success("회원가입에 성공했습니다.");
    }

    public ResponseEntity<?> login(RealtorRequest.Login login) {

        if (realtorRepository.findByBusinessNumber(login.getBusinessNumber()).orElse(null) == null) {
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

    public ResponseEntity<?> reissue(RealtorRequest.Reissue reissue) {
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

    public ResponseEntity<?> logout(RealtorRequest.Logout logout) {
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

    public ResponseEntity<?> withdrawl(RealtorRequest.withdrawl withdrawl) {
        Optional<Realtor> realtor = realtorRepository.findById(withdrawl.getNo());
        if(realtor.isPresent()) {
            realtorRepository.deleteById(withdrawl.getNo());
            return response.success("회원탈퇴 되었습니다.");
        }
        return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<?> authority() {
        // SecurityContext에 담겨 있는 authentication userId 정보
        String userId = SecurityUtil.getCurrentUserId();

        Realtor realtor = realtorRepository.findByBusinessNumber(userId)
            .orElseThrow(() -> new UsernameNotFoundException("No authentication information."));

        // add ROLE_USER
        realtor.getRoles().add(Authority.ROLE_REALTOR.name());
        realtorRepository.save(realtor);

        return response.success();
    }

    public ResponseEntity<?> findRealtorDetail(Long realtorNo) throws IOException {
        Realtor realtor = realtorRepository.findById(realtorNo).get();
        if(realtor == null) return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        RealtorResponse.FindDetail realtorDetail = RealtorResponse.FindDetail.builder()
            .no(realtor.getNo())
            .businessNumber(realtor.getBusinessNumber())
            .name(realtor.getName())
            .email(realtor.getEmail())
            .phone(realtor.getPhone())
            .corp(realtor.getCorp())
            .registrationNumber(realtor.getRegistrationNumber())
            .description(realtor.getDescription())
            .businessAddress(realtor.getBusinessAddress())
            .imageSrc(realtor.getImageSrc())
            .build();
        return response.success(realtorDetail,"공인중개사 상세 정보가 조회되었습니다.", HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity<?> updateRealtor(Long realtorNo, RealtorRequest.Update request, MultipartFile file) throws IOException {
        Realtor realtor = realtorRepository.findById(realtorNo).get();
        if(realtor == null) return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        String preImg = realtor.getImageSrc();
        System.out.println("name " + file.getOriginalFilename());
        if(file != null) {
            s3Service.deleteFile(preImg);
        }
        String imgSrc = s3Service.upload(file);
        realtor.updateRealtor(request, imgSrc);
        realtorRepository.save(realtor);
        return response.success("공인중개사 정보 수정을 완료했습니다.", HttpStatus.OK);
    }


    public ResponseEntity<?> temporaryPassword(RealtorRequest.FindPassword request) {
        Realtor realtor = realtorRepository.findByEmailAndBusinessNumber(request.getEmail(), request.getBusinessNumber());
        if(realtor == null) return response.success("비밀번호 찾기 이메일을 전송하였습니다.", HttpStatus.OK);
        String temporaryPwd = realtor.generateRandomPassword();
        realtor.updatePassword(passwordEncoder.encode(temporaryPwd));
        realtorRepository.save(realtor);
        emailService.joinEmail(realtor.getEmail(), temporaryPwd, realtor.getName());
        return response.success("비밀번호 찾기 이메일을 전송하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> findDistinctRealtorWithItemsByHouseByRegion(String sidoName, String gugunName, String dongName) {
        String regionCode = regionRepository.findBySidoNameAndGugunNameAndDongName(sidoName, gugunName, dongName).getRegionCode();
        List<Realtor> findRealtors = realtorRepository.findDistinctRealtorWithItemsByHouseByRegion(regionCode);
        List<RealtorResponse.FindByRegion> list = findRealtors.stream()
            .map(r -> RealtorResponse.FindByRegion.builder()
                    .name(r.getName())
                    .phone(r.getPhone())
                    .corp(r.getCorp())
                    .description(r.getDescription())
                    .businessAddress(r.getBusinessAddress())
                    .imageSrc(r.getImageSrc())
                    .build())
            .collect(Collectors.toList());
        return response.success(list,sidoName+" "+ gugunName+" "+dongName+" 지역의 매물을 보유한 공인중개사 목록을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> findRealtorList(String orderBy) {
        List<RealtorProjectionInterface> findRealtors = null;
        if(orderBy.equals("review")){
            findRealtors = realtorRepository.findAllByOrderByCountByReviewsDesc();
        } else if(orderBy.equals("star")) {
            findRealtors = realtorRepository.findAllByOrderByCountByStarRatingDesc();
        }
        return response.success(findRealtors,"메인페이지의 공인중개사 목록을 조회하였습니다.", HttpStatus.OK);
    }
}