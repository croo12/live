package com.ssafy.live.common.domain.Entity.item;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public enum Heating {

    INDIVIDUAl("개별"),
    CENTERAL("중앙"),
    DISTRICT("지역");

    private final String heating;
}
