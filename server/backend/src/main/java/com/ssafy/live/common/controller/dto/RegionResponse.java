package com.ssafy.live.common.controller.dto;

import com.ssafy.live.common.domain.Entity.Region;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class RegionResponse {

    private String regionCode;
    private String sidoName;
    private String gugunName;
    private String dongName;

    public static RegionResponse toResponse(Region region) {
        return RegionResponse.builder()
            .regionCode(region.getRegionCode())
            .sidoName(region.getSidoName())
            .gugunName(region.getGugunName())
            .dongName(region.getDongName())
            .build();
    }
}
