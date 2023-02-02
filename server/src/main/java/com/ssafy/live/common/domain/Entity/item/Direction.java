package com.ssafy.live.common.domain.Entity.item;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Direction {

    EAST("동"),
    WEST("서"),
    SOUTH("남"),
    NORTH("북"),
    SOUTH_EAST("남동"),
    SOUTH_WEST("남서"),
    NORTH_WEST("북서"),
    NORTH_EAST("북동");

    private final String direction;
}
