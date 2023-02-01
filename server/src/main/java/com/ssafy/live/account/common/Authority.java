package com.ssafy.live.account.common;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Authority  {

    ROLE_USER("일반 사용자"),
    ROLE_REALTOR("공인중개사");

    private final String description;
}
