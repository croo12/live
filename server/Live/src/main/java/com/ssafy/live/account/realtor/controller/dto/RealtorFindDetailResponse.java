package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.core.io.Resource;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorFindDetailResponse {

    private Resource resource;
    private Realtor realtor;

    @Builder
    public RealtorFindDetailResponse(Resource resource, Realtor realtor) {
        this.resource = resource;
        this.realtor = realtor;
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