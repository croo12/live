package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.*;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorUpdateRequest {

    private String name;
    private String phone;
    private String corp;
    private String description;
    private String businessAddress;
    @Column(columnDefinition = "TEXT")
    private String filePath;

    @Builder
    public RealtorUpdateRequest(String name, String phone, String corp, String description, String businessAddress) {
        this.name = name;
        this.phone = phone;
        this.corp = corp;
        this.description = description;
        this.businessAddress = businessAddress;
    }

    public Realtor toEntity(String imageSrc) {
        return Realtor.builder()
                .name(name)
                .phone(phone)
                .corp(corp)
                .description(description)
                .businessAddress(businessAddress)
                .imageSrc(imageSrc)
                .build();
    }
}
