package com.ssafy.live.account.common.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Authority  {

    USER("일반 사용자"),
    REALTOR("공인중개사");

    private final String description;
}
