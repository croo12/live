package com.ssafy.live.account.user.controller;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.account.user.controller.dto.UserRequest;
import com.ssafy.live.account.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserService usersService;

    @PostMapping
    public ResponseEntity<?> signUp(@Validated @RequestPart(value = "SignUp") UserRequest.SignUp signUp, Errors errors, @RequestPart(value = "file", required = false) MultipartFile uploadFile) throws IOException {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.signUp(signUp, uploadFile);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated UserRequest.Login login, Errors errors) {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.login(login);
    }

    @PostMapping("/reissue")
    public ResponseEntity<?> reissue(@Validated UserRequest.Reissue reissue, Errors errors) {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.reissue(reissue);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@Validated UserRequest.Logout logout, Errors errors) {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return usersService.logout(logout);
    }

    @GetMapping("/delete")
    public ResponseEntity<?> withdrwal(@Validated UserRequest.withdrawl withdrawl) {
        return usersService.withdrawl(withdrawl);
    }

    @GetMapping("/authority")
    public ResponseEntity<?> authority() {
        log.info("ADD ROLE_ADMIN");
        return usersService.authority();
    }

    @PostMapping("/passcheck")
    public ResponseEntity<?> temporaryPassword(@RequestBody UserRequest.FindPassword request) {
        log.info("사용자 임시비밀번호 발급");
        return usersService.temporaryPassword(request);
    }
}
