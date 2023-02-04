package com.ssafy.live.house.controller.dto;

import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationDetail;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationDetail.MyConsultingItem;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class ItemResponse {

    @Builder
    @Getter
    @AllArgsConstructor
    public static class ItemsByBuildingName {
        private Long itemNo;
        private int deposit;
        private int rent;
        private int maintenanceFee;
        private String description;
        private String buildingName;
        private String image;
        private String address;
        private String addressDetail;
    }
}
