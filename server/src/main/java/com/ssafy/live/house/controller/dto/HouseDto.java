package com.ssafy.live.house.controller.dto;

import com.ssafy.live.common.domain.Response;
import lombok.*;

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
    }
}
