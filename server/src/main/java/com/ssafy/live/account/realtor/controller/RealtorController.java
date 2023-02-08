package com.ssafy.live.account.realtor.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.account.realtor.controller.dto.RealtorRequest;
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

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/realtors")
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
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.reissue(reissue);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@Validated RealtorRequest.Logout logout, Errors errors) {
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
    public ResponseEntity<?> temporaryPassword(@RequestBody RealtorRequest.FindPassword request) {
        log.info("공인중개사 임시비밀번호 발급");
        return realtorService.temporaryPassword(request);
    }

    @GetMapping ("/{realtorNo}")
    public ResponseEntity<?> findRealtorDetail(@PathVariable("realtorNo") Long realtorNo) {
        log.info("공인중개사 정보 상세 조회");
        return realtorService.findRealtorDetail(realtorNo);
    }

    @GetMapping ("/{realtorNo}/consultings")
    public ResponseEntity<?> findRealtorDetailByRegion(@PathVariable("realtorNo") Long realtorNo, @RequestParam("regionCode") String regionCode) {
        log.info("예약페이지 - 공인중개사 정보 상세 조회");
        return realtorService.findRealtorDetailByRegion(realtorNo, regionCode);
    }

    @GetMapping("/region")
    public ResponseEntity<?> findRealtorByRegion(@RequestParam String regionCode) {
        log.info("특정 지역 공인중개사 목록 조회");
        return realtorService.findDistinctRealtorWithItemsByHouseByRegion(regionCode);
    }

    @GetMapping
    public ResponseEntity<?> findRealtorList(@RequestHeader(AUTHORIZATION) String token, @RequestParam String orderBy) {
        log.info("메인페이지 공인중개사 목록 조회");
        return realtorService.findRealtorList(token, orderBy);
    }
}
