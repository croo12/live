package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.review.domain.entity.Review;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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

    @Builder
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindAllDetail {

        private RealtorInfo realtorInfo;
        private List<Items> itemsList;
        private List<Reviews> reviewsList;
        @Getter
        @Builder
        public static class RealtorInfo {
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
            private static RealtorInfo toEntity(Realtor realtor) {
                return RealtorInfo.builder()
                        .no(realtor.getNo())
                        .name(realtor.getName())
                        .email(realtor.getEmail())
                        .phone(realtor.getPhone())
                        .imageSrc(realtor.getImageSrc())
                        .businessNumber(realtor.getBusinessNumber())
                        .businessAddress(realtor.getBusinessAddress())
                        .corp(realtor.getCorp())
                        .registrationNumber(realtor.getRegistrationNumber())
                        .description(realtor.getDescription())
                        .build();
            }
        }
        @Getter
        @Builder
        public static class Items {
            private Long itemNo;
            private String imageSrc;
            private int deposit;
            private int monthlyRent;
            private String address;
            private int floor;
            private String buildingName;
            public static Items toEntity(Item item, String imageSrc, House house) {
                return Items.builder()
                        .itemNo(item.getNo())
                        .imageSrc(imageSrc)
                        .deposit(item.getDeposit())
                        .monthlyRent(item.getRent())
                        .address(house.getAddress())
                        .floor(house.getFloor())
                        .buildingName(item.getBuildingName())
                        .build();
            }
        }

        @Getter
        @Builder
        public static class Reviews {
            private Long reviewNo;
            private String reviewInfo;
            private int ratingScore;
            private LocalDateTime createDate;
            public static Reviews toEntity(Review review) {
                return Reviews.builder()
                        .reviewNo(review.getNo())
                        .reviewInfo(review.getReviewInfo())
                        .ratingScore(review.getRatingScore())
                        .createDate(review.getCreatedDate())
                        .build();
            }
        }

        public static FindAllDetail toEntity(Realtor realtor, List<Items> itemsList, List<Reviews> reviewsList) {
            return RealtorResponse.FindAllDetail.builder()
                    .realtorInfo(RealtorInfo.toEntity(realtor))
                    .itemsList(itemsList)
                    .reviewsList(reviewsList)
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
