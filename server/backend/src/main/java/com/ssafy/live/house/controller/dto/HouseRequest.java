package com.ssafy.live.house.controller.dto;

import com.ssafy.live.house.domain.entity.House;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;

public class HouseRequest {

    @Getter
    @Builder
    public static class HouseRegistRequest {

        private Long houseNo;
        @NotBlank(message = "주소를 입력하세요")
        private String address;
        @NotBlank(message = "상세주소를 입력하세요")
        private String addressDetail;
        private String buildingName;
        @NotBlank(message = "공급면적을 입력하세요")
        private float supplyArea;
        @NotBlank(message = "전용면적을 입력하세요")
        private float exclusivePrivateArea;
        @NotBlank(message = "층을 입력하세요")
        private int floor;
        @NotBlank(message = "층을 입력하세요")
        private int totalFloor;
        @NotBlank(message = "방 개수를 입력하세요")
        private int room;
        @NotBlank(message = "화장실 개수를 입력하세요")
        private int bathroom;
        @NotBlank(message = "준공년도를 입력하세요")
        private int completionYear;
        private boolean contracted;
        private String purpose;
        private String sido;
        private String gugun;
        private String dong;
        private int zipcode;
        private String regionCode;

        public House toEntity() {
            return House.builder()
                .address(address)
                .addressDetail(addressDetail)
                .supplyArea(supplyArea)
                .exclusivePrivateArea(exclusivePrivateArea)
                .floor(floor)
                .totalFloor(totalFloor)
                .room(room)
                .bathroom(bathroom)
                .completionYear(completionYear)
                .purpose(purpose)
                .sido(sido)
                .gugun(gugun)
                .dong(dong)
                .zipCode(zipcode)
                .regionCode(regionCode)
                .buildingName(buildingName)
                .contracted(contracted)
                .build();
        }
    }
}
