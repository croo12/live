package com.ssafy.live.account.realtor.controller.dto;

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
