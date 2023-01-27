package com.ssafy.live.account.realtor.controller;

import com.ssafy.live.account.realtor.controller.dto.*;
import com.ssafy.live.account.realtor.service.RealtorService;
import com.ssafy.live.common.domain.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/realtors")
public class RealtorController {

    @Value("${com.example.upload.path}")
    private String uploadPath;
    private final RealtorService realtorService;

    @PostMapping("/signup")
    public ResponseEntity<Message> signup(@RequestPart(value = "RealtorSignupRequest") RealtorSignupRequest request, @RequestPart(value = "file", required = false) MultipartFile uploadFile) {
        String saveName = uploadPath+ request.getName() + "_" + uploadFile.getOriginalFilename();
        File file = new File("C:\\"+saveName);
        try {
            uploadFile.transferTo(file);
        }catch (IOException e){
            e.printStackTrace();
        }
        log.info("공인중개사 회원가입");
        return ResponseEntity.ok()
                .body(realtorService.createRealtor(request, file.getPath()));
    }

    @GetMapping ("/{realtorNo}")
    public ResponseEntity<RealtorFindDetailResponse> findRealtorDetail(@PathVariable("realtorNo") Long realtorNo) throws IOException {
        log.info("공인중개사 정보 상세 조회");
        return ResponseEntity.ok()
                .body(realtorService.findRealtorDetail(realtorNo));
    }

    @PostMapping
    public ResponseEntity<Message> signupWithS3(@RequestPart(value = "RealtorSignupWithS3Request") RealtorSignupWithS3Request request, @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        log.info("공인중개사 회원가입");
        return ResponseEntity.ok()
                .body(realtorService.createRealtorWithS3(request, file));
    }

    @PostMapping("/info/{realtorNo}")
    public ResponseEntity<Message> updateRealtor(@PathVariable("realtorNo") Long realtorNo, @RequestPart(value = "RealtorUpdateRequest") RealtorUpdateRequest request, @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        log.info("공인중개사 정보수정");
        return ResponseEntity.ok()
                .body(realtorService.updateRealtor(realtorNo, request, file));
    }

    @PostMapping("/passcheck")
    public ResponseEntity<Message> findPassword(@RequestBody RealtorFindPasswordRequest request) {
        log.info("공인중개사 비밀번호 찾기");
        return ResponseEntity.ok()
                .body(realtorService.findPassword(request));
    }
}
