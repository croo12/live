package com.ssafy.live.common.exception;

public class UnauthorizedException extends CustomException {

    public UnauthorizedException(ErrorCode error) {
        super(error);
    }
}