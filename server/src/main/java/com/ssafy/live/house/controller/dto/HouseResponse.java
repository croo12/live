package com.ssafy.live.house.controller.dto;

import com.ssafy.live.house.domain.entity.House;
import lombok.*;

import javax.validation.constraints.NotBlank;

public class HouseResponse {

    @Getter
    @Builder
    public static class HouseDetailResponse {
        private Long houseNo;
        private boolean isContracted;
        private String address;
        private String addressDetail;
        private float supplyArea;
        private float exclusivePrivateArea;
        private int floor;
        private int totalFloor;
        private String purpose;
        private int room;
        private int bathroom;
        private int completionYear;
        private String sido;
        private String gugun;
        private String dong;
        private String regionCode;
        private String buildingName;

        public static HouseDetailResponse toDto(House house){
            return HouseDetailResponse.builder()
                    .houseNo(house.getNo())
                    .address(house.getAddress())
                    .addressDetail(house.getAddressDetail())
                    .supplyArea(house.getSupplyArea())
                    .exclusivePrivateArea(house.getExclusivePrivateArea())
                    .floor(house.getFloor())
                    .totalFloor(house.getTotalFloor())
                    .room(house.getRoom())
                    .bathroom(house.getBathroom())
                    .completionYear(house.getCompletionYear())
                    .purpose(house.getPurpose())
                    .sido(house.getSido())
                    .gugun(house.getGugun())
                    .dong(house.getDong())
                    .regionCode(house.getRegionCode())
                    .buildingName(house.getBuildingName())
                    .isContracted(house.isContracted())
                    .build();
        }
    }
}
