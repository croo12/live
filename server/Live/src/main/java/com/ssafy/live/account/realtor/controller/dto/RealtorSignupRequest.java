package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorSignupRequest {

    private String businessNumber;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String corp;
    private String registrationNumber;
    private String description;
    private String businessAddress;

    @Builder
    public RealtorSignupRequest(String businessNumber, String password, String name, String email, String phone, String corp, String registrationNumber, String description, String businessAddress) {
        this.businessNumber = businessNumber;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.corp = corp;
        this.registrationNumber = registrationNumber;
        this.description = description;
        this.businessAddress = businessAddress;
    }

    public Realtor toEntity(String password, String imageSrc) {
        return Realtor.builder()
                .businessNumber(businessNumber)
                .password(password)
                .name(name)
                .email(email)
                .phone(phone)
                .corp(corp)
                .registrationNumber(registrationNumber)
                .description(description)
                .businessNumber(businessNumber)
                .imageSrc(imageSrc)
                .build();
    }

//    public Realtor toEntity(PasswordEncoder passwordEncoder, String imageSrc) {
//        return Realtor.builder()
//                .businessNumber(businessNumber)
//                .password(passwordEncoder.encode(password))
//                .name(name)
//                .email(email)
//                .phone(phone)
//                .corp(corp)
//                .registrationNumber(registrationNumber)
//                .description(description)
//                .businessNumber(businessNumber)
//                .imageSrc(imageSrc)
//                .build();
//    }
}