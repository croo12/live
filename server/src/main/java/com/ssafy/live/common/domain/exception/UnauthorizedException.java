package com.ssafy.live.common.domain.exception;

public class UnauthorizedException extends CommonException {

    public UnauthorizedException(ErrorCode error) {
        super(error);
    }
}