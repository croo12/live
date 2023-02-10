package com.ssafy.live.account.user.controller.dto;

import com.ssafy.live.account.user.domain.entity.Users;
import lombok.*;

public class UserResponse {

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Update {

        private String phone;
        private String email;
        private String imageSrc;
        private String region;
        public static UserResponse.Update toDto(Users user) {
            return Update.builder()
                    .phone(user.getPhone())
                    .email(user.getEmail())
                    .imageSrc(user.getImageSrc())
                    .region(user.getRegion())
                    .build();
        }
    }

    @Builder
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindDetail {
        private String id;
        private String name;
        private String email;
        private String phone;
        private String region;
        private String gender;
        private String imageSrc;

        public static UserResponse.FindDetail toDto(Users user) {
            return FindDetail.builder()
                    .id(user.getId())
                    .name(user.getName())
                    .email(user.getEmail())
                    .phone(user.getPhone())
                    .gender(user.getRegion())
                    .gender(user.getGender())
                    .imageSrc(user.getImageSrc())
                    .build();
        }
    }
}
