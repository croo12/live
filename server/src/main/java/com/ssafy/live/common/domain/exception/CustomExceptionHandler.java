package com.ssafy.live.common.domain.exception;


import com.ssafy.live.common.domain.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@RequiredArgsConstructor
public class CustomExceptionHandler {

    private final Response response;

    @ExceptionHandler(CustomException.class)
    protected ResponseEntity<?> handleCustomException(CustomException e) {
        return response.fail(e.getError().getMessage(),e.getError().getHttpStatus());
    }
}