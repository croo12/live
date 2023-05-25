package com.ssafy.live.account.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class CommonResponse {

    @Builder
    @Getter
    @AllArgsConstructor
    public static class TokenInfo {

        private String grantType;
        private String accessToken;
        private String refreshToken;
        private Long refreshTokenExpirationTime;
    }
}
