package com.ssafy.live.house.controller.dto;

import com.ssafy.live.common.domain.Response;
import com.ssafy.live.house.domain.entity.House;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class HouseDto {

    @Getter
    @Builder
    public static class HouseResponse {
        private Long houseNo;
        private int isActive;
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
    }

    @Getter
    @Builder
    public static class HouseRequest {
        //House
        private Long houseNo;
        @NotBlank(message = "주소를 입력하세요")
        private String address;
        @NotBlank(message = "상세주소를 입력하세요")
        private String addressDetail;
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
        private String purpose;
        private String sido;
        private String gugun;
        private String dong;
        private int zipcode;

        public House toEntity(){
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
                    .build();
        }
    }
}
