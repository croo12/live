package com.ssafy.live.account.user.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.account.user.controller.dto.UserRequest;
import com.ssafy.live.account.user.service.UserService;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

    private final UserService usersService;

    @PostMapping
    public ResponseEntity<?> signUp(
        @Validated @RequestPart(value = "SignUp") UserRequest.SignUp signUp, Errors errors,
        @RequestPart(value = "file", required = false) MultipartFile uploadFile)
        throws IOException {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.signUp(signUp, uploadFile);
    }

    @DeleteMapping()
    public ResponseEntity<?> withdrawal(Authentication authentication) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return usersService.withdrawal(principal);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated @RequestBody UserRequest.Login login, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.login(login);
    }

    @GetMapping
    public ResponseEntity<?> findUserDetail(Authentication authentication) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return usersService.findUserDetail(principal);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(Authentication authentication) {
        return usersService.logout(authentication);
    }

    @PostMapping("/passcheck")
    public ResponseEntity<?> temporaryPassword(@RequestBody UserRequest.FindPassword request) {
        log.info("사용자 임시비밀번호 발급");
        return usersService.temporaryPassword(request);
    }

    @PostMapping("/info")
    public ResponseEntity<?> updateUser(Authentication authentication,
        @RequestPart(value = "Update") UserRequest.Update request,
        @RequestPart(value = "file", required = false) MultipartFile file)
        throws IOException {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return usersService.updateUser(principal, request, file);
    }

    @PostMapping("/id")
    public ResponseEntity<?> idDuplicate(@RequestBody UserRequest.IdDuplcate idDuplcate) {
        return usersService.idDuplicate(idDuplcate);
    }

    @PostMapping("/reissue")
    public ResponseEntity<?> reissue(@Validated @RequestBody UserRequest.Reissue reissue,
        Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.reissue(reissue);
    }
}
