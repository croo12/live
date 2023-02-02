package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindByRegion {

        private String name;
        private String phone;
        private String corp;
        private String description;
        private String businessAddress;
        private String imageSrc;

        @Builder
        public FindByRegion(Realtor realtor) {
            this.name = realtor.getName();
            this.phone = realtor.getPhone();
            this.corp = realtor.getCorp();
            this.description = realtor.getDescription();
            this.businessAddress = realtor.getBusinessAddress();
            this.imageSrc = realtor.getImageSrc();
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
    }

    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindRealtorList {

        private String name;
        private String phone;
        private String corp;
        private String description;
        private String businessAddress;
        private String imageSrc;

        @Builder
        public FindRealtorList(Realtor realtor) {
            this.name = realtor.getName();
            this.phone = realtor.getPhone();
            this.corp = realtor.getCorp();
            this.description = realtor.getDescription();
            this.businessAddress = realtor.getBusinessAddress();
            this.imageSrc = realtor.getImageSrc();
        }
    }
}
