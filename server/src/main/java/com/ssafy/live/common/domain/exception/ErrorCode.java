package com.ssafy.live.common.domain.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    ACCESS_TOKEN_EXPIRED("만료된 Access Token 입니다."),
    WRONG_AUTHENTICATION_TYPE("잘못된 인증 타입 입니다."),
    USER_NOT_FOUND("사용자 정보를 찾을 수 없습니다."),
    CONSULTING_NOT_FOUND("상담 정보를 찾을 수 없습니다."),
    ITEM_NOT_FOUND("매물 정보를 찾을 수 없습니다."),
    REALTOR_NOT_FOUND("공인중개사 정보를 찾을 수 없습니다.");

    private final String message;

}