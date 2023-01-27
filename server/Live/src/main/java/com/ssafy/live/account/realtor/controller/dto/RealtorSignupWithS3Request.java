package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.*;

import javax.persistence.Column;


@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorSignupWithS3Request {

    private String businessNumber;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String corp;
    private String registrationNumber;
    private String description;
    private String businessAddress;
    @Column(columnDefinition = "TEXT")
    private String filePath;

    @Builder
    public RealtorSignupWithS3Request(String businessNumber, String password, String name, String email, String phone, String corp, String registrationNumber, String description, String businessAddress) {
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

    @Builder
    public RealtorSignupWithS3Request(String businessNumber, String password, String name, String email, String phone, String corp, String registrationNumber, String description, String businessAddress, String filePath) {
        this.businessNumber = businessNumber;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.corp = corp;
        this.registrationNumber = registrationNumber;
        this.description = description;
        this.businessAddress = businessAddress;
        this.filePath = filePath;
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


    public Realtor toEntity() {
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
                .imageSrc(filePath)
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