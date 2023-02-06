package com.ssafy.live.house.controller.dto;

import com.ssafy.live.common.domain.Entity.item.Direction;
import com.ssafy.live.common.domain.Entity.item.Entrance;
import com.ssafy.live.common.domain.Entity.item.Heating;
import lombok.*;

import java.time.LocalDate;

public class ItemResponse {

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ItemDetailResponse{

        private Long realtorNo;

        private int deposit;

        private int rent;

        private int maintenanceFee;
        private String description;
        private LocalDate moveInDate;
        private Heating heating;
        private Direction direction;
        private Entrance entrance;


        private HouseResponse.HouseRequest house;
        private ItemOptionRequest.ItemOptionRegistRequest itemOption;

    }


}
