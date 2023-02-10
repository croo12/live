package com.ssafy.live.common.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;


@Getter
@AllArgsConstructor
public enum ErrorCode {
    ACCESS_TOKEN_EXPIRED(HttpStatus.UNAUTHORIZED,"만료된 Access Token 입니다."),
    WRONG_AUTHENTICATION_TYPE(HttpStatus.UNAUTHORIZED,"잘못된 인증 타입 입니다."),
    USER_NOT_FOUND(HttpStatus.BAD_REQUEST,"사용자 정보를 찾을 수 없습니다."),
    CONSULTING_NOT_FOUND(HttpStatus.BAD_REQUEST,"상담 정보를 찾을 수 없습니다."),
    ITEM_NOT_FOUND(HttpStatus.BAD_REQUEST,"매물 정보를 찾을 수 없습니다."),
    HOUSE_NOT_FOUND(HttpStatus.BAD_REQUEST,"주택 정보를 찾을 수 없습니다."),
    REALTOR_NOT_FOUND(HttpStatus.BAD_REQUEST,"공인중개사 정보를 찾을 수 없습니다.");


    private final HttpStatus httpStatus;
    private final String message;

}