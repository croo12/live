package com.ssafy.live.house.controller.dto;

import com.ssafy.live.common.domain.Entity.item.Direction;
import com.ssafy.live.common.domain.Entity.item.Entrance;
import com.ssafy.live.common.domain.Entity.item.Heating;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;

import java.time.LocalDate;

public class ItemResponse {

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ItemDetailResponse{

        private int deposit;
        private int rent;
        private int maintenanceFee;
        private String description;
        private LocalDate moveInDate;
        private Heating heating;
        private Direction direction;
        private Entrance entrance;

        private HouseResponse.HouseDetailResponse house;
        private ItemOptionResponse.ItemOptionDetailResponse itemOption;

        public static ItemDetailResponse toDto(Item item) {
            return ItemDetailResponse.builder()
                    .house(HouseResponse.HouseDetailResponse.toDto(item.getHouse()))
                    .itemOption(ItemOptionResponse.ItemOptionDetailResponse.toDto(item.getItemOption()))
                    .deposit(item.getDeposit())
                    .rent(item.getRent())
                    .maintenanceFee(item.getMaintenanceFee())
                    .description(item.getDescription())
                    .moveInDate(item.getMoveInDate())
                    .heating(item.getHeating())
                    .direction(item.getDirection())
                    .entrance(item.getEntrance())
                    .build();
        }
    }


}
