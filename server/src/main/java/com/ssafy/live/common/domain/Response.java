package com.ssafy.live.common.domain;

import com.ssafy.live.common.exception.ErrorCode;
import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Builder
@Component
public class Response {

    @Getter
    @Builder
    private static class Body {
        private int state;
        private String result;
        private String message;
        private Object data;
        private Object error;
    }

    public static Body reissue() {
        return Body.builder()
                .state(HttpStatus.UNAUTHORIZED.value())
                .message(ErrorCode.ACCESS_TOKEN_EXPIRED.getMessage())
                .error("TOKEN-0001")
                .build();
    }

    public ResponseEntity<?> success(Object data, String msg, HttpStatus status) {
        Body body = Body.builder()
                .state(status.value())
                .data(data)
                .result("success")
                .message(msg)
                .error(Collections.emptyList())
                .build();
        return ResponseEntity.ok(body);
    }
    /**
     * 메세지만 가진 성공 응답을 반환한다.
     * @param msg 응답 바디 message 필드에 포함될 정보
     * @return 응답 객체
     */
    public ResponseEntity<?> success(String msg) {
        return success(Collections.emptyList(), msg, HttpStatus.OK);
    }

    /**
     * 데이터만 가진 성공 응답을 반환한다.</p>
     * @param data 응답 바디 data 필드에 포함될 정보
     * @return 응답 객체
     */
    public ResponseEntity<?> success(Object data) {
        return success(data, null, HttpStatus.OK);
    }

    /**
     * 성공 응답만 반환한다.
     * @return 응답 객체
     */
    public ResponseEntity<?> success() {
        return success(Collections.emptyList(), null, HttpStatus.OK);
    }

    public ResponseEntity<?> fail(Object data, String msg, HttpStatus status) {
        Body body = Body.builder()
                .state(status.value())
                .data(data)
                .result("fail")
                .message(msg)
                .error(Collections.emptyList())
                .build();
        return ResponseEntity.ok(body);
    }

    /**
     * 메세지를 가진 실패 응답을 반환한다.
     * @param msg 응답 바디 message 필드에 포함될 정보
     * @param status 응답 바디 status 필드에 포함될 응답 상태 코드
     * @return 응답 객체
     */
    public ResponseEntity<?> fail(String msg, HttpStatus status) {
        return fail(Collections.emptyList(), msg, status);
    }

    public ResponseEntity<?> success(String msg, HttpStatus status) {
        return success(Collections.emptyList(), msg, status);
    }
}
