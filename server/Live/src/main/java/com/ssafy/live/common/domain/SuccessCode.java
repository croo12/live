package com.ssafy.live.common.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SuccessCode {
    REALTOR_REGISTED("공인중개사 회원가입이 완료되었습니다."),
    REALTOR_UPDATED("공인중개사 정보 수정을 완료했습니다."),
    EMAIL_FINDPASSWORD("비밀번호 찾기 이메일을 전송하였습니다.");
    private final String message;
}
