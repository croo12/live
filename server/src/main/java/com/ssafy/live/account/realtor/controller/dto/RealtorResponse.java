package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.*;

public class RealtorResponse {

    @Builder
    @Getter
    @AllArgsConstructor
    public static class TokenInfo {

        private String grantType;
        private String accessToken;
        private String refreshToken;
        private Long refreshTokenExpirationTime;
    }

    @Builder
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindByRegion {

        private String name;
        private String phone;
        private String corp;
        private String description;
        private String businessAddress;
        private String imageSrc;

        public static RealtorResponse.FindByRegion toEntity(Realtor r) {
            return RealtorResponse.FindByRegion.builder()
                    .name(r.getName())
                    .phone(r.getPhone())
                    .corp(r.getCorp())
                    .description(r.getDescription())
                    .businessAddress(r.getBusinessAddress())
                    .imageSrc(r.getImageSrc())
                    .build();
        }
    }

    @Builder
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindDetail {

        private Long no;
        private String name;
        private String email;
        private String phone;
        private String imageSrc;
        private String businessNumber;
        private String corp;
        private String registrationNumber;
        private String description;
        private String businessAddress;

        public static FindDetail toEntity(Realtor realtor) {
            return RealtorResponse.FindDetail.builder()
                    .no(realtor.getNo())
                    .businessNumber(realtor.getBusinessNumber())
                    .name(realtor.getName())
                    .email(realtor.getEmail())
                    .phone(realtor.getPhone())
                    .corp(realtor.getCorp())
                    .registrationNumber(realtor.getRegistrationNumber())
                    .description(realtor.getDescription())
                    .businessAddress(realtor.getBusinessAddress())
                    .imageSrc(realtor.getImageSrc())
                    .build();
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindRealtorList {

        private String name;
        private String imageSrc;
        private String corp;
        private int review;
        private float starScore;
    }
}
