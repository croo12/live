package com.ssafy.live.common.exception;

public class BadRequestException extends CustomException {

    public BadRequestException(ErrorCode error) {
        super(error);
    }
}