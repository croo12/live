package com.ssafy.live.common.domain.exception;

public class BadRequestException extends CustomException {

    public BadRequestException(ErrorCode error) {
        super(error);
    }
}