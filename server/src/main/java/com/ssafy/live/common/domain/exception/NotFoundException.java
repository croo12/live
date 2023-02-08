package com.ssafy.live.common.domain.exception;

public class NotFoundException extends CommonException {

    public NotFoundException(ErrorCode error) {
        super(error);
    }
}