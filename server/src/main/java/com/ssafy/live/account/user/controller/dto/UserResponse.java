package com.ssafy.live.account.user.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class UserResponse {

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Update {

        private String phone;
        private String email;
        private String imageSrc;
        private String region;
    }
}
