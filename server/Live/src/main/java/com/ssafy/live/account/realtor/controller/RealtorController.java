package com.ssafy.live.account.realtor.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.account.realtor.controller.dto.*;
import com.ssafy.live.account.realtor.service.RealtorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/realtors")
public class RealtorController {


    @Value("${com.example.upload.path}")
    private String uploadPath;
    private final RealtorService realtorService;

    @PostMapping
    public ResponseEntity<?> signUp(@Validated @RequestPart(value = "SignUp") RealtorRequest.SignUp signUp, Errors errors, @RequestPart(value = "file", required = false) MultipartFile uploadFile) throws IOException {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.signUp(signUp, uploadFile);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated RealtorRequest.Login login, Errors errors) {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.login(login);
    }

    @PostMapping("/reissue")
    public ResponseEntity<?> reissue(@Validated RealtorRequest.Reissue reissue, Errors errors) {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.reissue(reissue);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@Validated RealtorRequest.Logout logout, Errors errors) {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.logout(logout);
    }

    @GetMapping("/delete")
    public ResponseEntity<?> withdrwal(@Validated RealtorRequest.withdrawl withdrawl) {
        return realtorService.withdrawl(withdrawl);
    }

    @GetMapping("/authority")
    public ResponseEntity<?> authority() {
        log.info("ADD ROLE_REALTOR");
        return realtorService.authority();
    }

    @PostMapping("/info/{realtorNo}")
    public ResponseEntity<?> updateRealtor(@PathVariable("realtorNo") Long realtorNo, @RequestPart(value = "Update") RealtorRequest.Update request, @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        log.info("공인중개사 정보수정");
        return realtorService.updateRealtor(realtorNo, request, file);
    }

    @PostMapping("/passcheck")
    public ResponseEntity<?> findPassword(@RequestBody RealtorRequest.FindPassword request) {
        log.info("공인중개사 비밀번호 찾기");
        return realtorService.findPassword(request);
    }

    @GetMapping ("/{realtorNo}")
    public ResponseEntity<?> findRealtorDetail(@PathVariable("realtorNo") Long realtorNo) throws IOException {
        log.info("공인중개사 정보 상세 조회");
        return realtorService.findRealtorDetail(realtorNo);
    }

    @GetMapping("/region")
    public ResponseEntity<?> findRealtorByRegion(@RequestParam String sidoName, @RequestParam String gugunName, @RequestParam String dongName) {
        log.info("특정 지역 공인중개사 목록 조회");
        return realtorService.findDistinctRealtorWithItemsByHouseByRegion(sidoName, gugunName, dongName);
    }

}
