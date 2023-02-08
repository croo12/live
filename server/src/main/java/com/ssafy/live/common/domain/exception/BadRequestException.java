package com.ssafy.live.common.domain.exception;

public class BadRequestException extends CommonException {

    public BadRequestException(ErrorCode error) {
        super(error);
    }
}