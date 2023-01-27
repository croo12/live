package com.ssafy.live.account.realtor.controller;

import com.ssafy.live.account.common.S3Service;
import com.ssafy.live.account.realtor.controller.dto.RealtorFindDetailResponse;
import com.ssafy.live.account.realtor.controller.dto.RealtorSignupRequest;
import com.ssafy.live.account.realtor.controller.dto.RealtorSignupWithS3Request;
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

    private final S3Service s3Service;

    @PostMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok()
                .body("hello");
    }

    @Value("${com.example.upload.path}")
    private String uploadPath;
    private final RealtorService realtorService;

    @PostMapping
    public ResponseEntity<Message> signup(@RequestPart(value = "RealtorSignupRequest") RealtorSignupRequest request, @RequestPart(value = "file", required = false) MultipartFile uploadFile) {
        String saveName = uploadPath+ request.getName() + "_" + uploadFile.getOriginalFilename();
        File file = new File("C:\\"+saveName);
        try {
            uploadFile.transferTo(file);
        }catch (IOException e){
            e.printStackTrace();
        }

        Message message = realtorService.createRealtor(request, file.getPath());
        log.info("공인중개사 회원가입");
        return ResponseEntity.ok()
                .body(message);
    }

    @GetMapping ("/{realtorNo}")
    public ResponseEntity<RealtorFindDetailResponse> findRealtorDetail(@PathVariable("realtorNo") Long realtorNo) throws IOException {
        return realtorService.findRealtorDetail(realtorNo);
    }

    @PostMapping("/signupS3")
    public ResponseEntity<Message> signupWithS3(@RequestPart(value = "RealtorSignupWithS3Request") RealtorSignupWithS3Request request, @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        String imgPath = s3Service.upload(file);
        request.setFilePath(imgPath);
        Message message = realtorService.createRealtorWithS3(request, imgPath);
        log.info("공인중개사 회원가입");
        return ResponseEntity.ok()
                .body(message);
    }
}
