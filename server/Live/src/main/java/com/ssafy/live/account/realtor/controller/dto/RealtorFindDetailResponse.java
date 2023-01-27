package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.core.io.Resource;

import javax.persistence.Column;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorFindDetailResponse {

    private Long no;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String imageSrc;
    private String businessNumber;
    private String corp;
    private String registrationNumber;
    private String description;
    private String businessAddress;

    @Builder
    public RealtorFindDetailResponse(Realtor realtor) {
        this.no = realtor.getNo();
        this.password = realtor.getPassword();
        this.name = realtor.getName();
        this.email = realtor.getEmail();
        this.phone = realtor.getPhone();
        this.imageSrc = realtor.getImageSrc();
        this.businessNumber = realtor.getBusinessNumber();
        this.corp = realtor.getCorp();
        this.registrationNumber = realtor.getRegistrationNumber();
        this.description = realtor.getDescription();
        this.businessAddress = realtor.getBusinessAddress();
    }
}