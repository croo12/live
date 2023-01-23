package com.ssafy.live.common.domain.item;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Entrance {

    STAIR("계단식"),
    PASSAGE("복도식"),
    COMPLEX("복합식");

    private final String entrance;
}
