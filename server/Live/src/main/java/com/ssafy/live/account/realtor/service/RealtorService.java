package com.ssafy.live.account.realtor.service;

import com.ssafy.live.account.common.EmailService;
import com.ssafy.live.account.common.S3Service;
import com.ssafy.live.account.realtor.controller.dto.*;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.common.domain.Message;
import com.ssafy.live.common.domain.repository.RegionRepository;
import com.ssafy.live.account.realtor.controller.dto.RealtorByRegionRequest;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import static com.ssafy.live.common.domain.SuccessCode.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class RealtorService {

    private final S3Service s3Service;
    private final RealtorRepository realtorRepository;
    private final RegionRepository regionRepository;
    private final EmailService emailService;

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

    public Message temporaryPassword(RealtorFindPasswordRequest request) {
        Realtor realtor = realtorRepository.findByEmailAndBusinessNumber(request.getEmail(), request.getBusinessNumber());
        String temporaryPwd = realtor.generateRandomPassword();
        realtor.updatePassword(temporaryPwd);
        realtorRepository.save(realtor);
        emailService.joinEmail(realtor.getEmail(), temporaryPwd, realtor.getName());
        return new Message(EMAIL_FINDPASSWORD.getMessage());
    }

    public List<RealtorByRegionRequest> findDistinctRealtorWithItemsByHouseByRegion(String sidoName, String gugunName, String dongName) {
        String regionCode = regionRepository.findBySidoNameAndGugunNameAndDongName(sidoName, gugunName, dongName).getRegionCode();
        List<Realtor> findRealtors = realtorRepository.findDistinctRealtorWithItemsByHouseByRegion(regionCode);
        List<RealtorByRegionRequest> list = findRealtors.stream()
                .map(r -> new RealtorByRegionRequest(r))
                .collect(Collectors.toList());
        return list;
    }
}