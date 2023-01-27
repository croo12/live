package com.ssafy.live.account.realtor.service;

import com.ssafy.live.account.common.S3Service;
import com.ssafy.live.account.realtor.controller.dto.RealtorFindDetailResponse;
import com.ssafy.live.account.realtor.controller.dto.RealtorSignupRequest;
import com.ssafy.live.account.realtor.controller.dto.RealtorSignupWithS3Request;
import com.ssafy.live.account.realtor.controller.dto.RealtorUpdateRequest;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.common.domain.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import static com.ssafy.live.common.domain.SuccessCode.REALTOR_REGISTED;
import static com.ssafy.live.common.domain.SuccessCode.REALTOR_UPDATED;

@Slf4j
@Service
@RequiredArgsConstructor
public class RealtorService {

    private final S3Service s3Service;
    private final RealtorRepository realtorRepository;

    @Transactional
    public Message createRealtor(RealtorSignupRequest realtorSignupRequest, String savePath) {
        Realtor realtor = realtorSignupRequest.toEntity(realtorSignupRequest.getPassword(), savePath);
        realtorRepository.save(realtor);
        return new Message(REALTOR_REGISTED.getMessage());
    }

    @Transactional
    public Message createRealtorWithS3(RealtorSignupWithS3Request realtorSignupRequest, MultipartFile file) throws IOException {
        String imgSrc = s3Service.upload(file);
        Realtor realtor = realtorSignupRequest.toEntity(realtorSignupRequest.getPassword(), imgSrc);
        realtorRepository.save(realtor);
        return new Message(REALTOR_REGISTED.getMessage());
    }

    public RealtorFindDetailResponse findRealtorDetail(Long realtorNo) throws IOException {
        Realtor realtor = realtorRepository.findById(realtorNo).get();
        return new RealtorFindDetailResponse(realtor);
    }

    @Transactional
    public Message updateRealtor(Long realtorNo, RealtorUpdateRequest request, MultipartFile file) throws IOException {
        Realtor realtor = realtorRepository.findById(realtorNo).get();
        s3Service.deleteFile(realtor.getImageSrc());
        String imgSrc = s3Service.upload(file);
        realtor.updateRealtor(request, imgSrc);
        realtorRepository.save(realtor);
        return new Message(REALTOR_UPDATED.getMessage());
    }
}