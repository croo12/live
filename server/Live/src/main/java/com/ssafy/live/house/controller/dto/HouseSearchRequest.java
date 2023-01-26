package com.ssafy.live.house.controller.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HouseSearchRequest {

    private String address;
    private String addressDetail;

}
