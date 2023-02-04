package com.ssafy.live.house.controller.dto;

import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationDetail;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationDetail.MyConsultingItem;
import java.util.List;

import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.entity.ItemImage;
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

        public static ItemsByBuildingName toEntity(Item item, House house, String image) {
            return ItemResponse.ItemsByBuildingName.builder()
                    .itemNo(item.getNo())
                    .deposit(item.getDeposit())
                    .rent(item.getRent())
                    .maintenanceFee(item.getMaintenanceFee())
                    .description(item.getDescription())
                    .buildingName(item.getBuildingName())
                    .image(image)
                    .address(house.getAddress())
                    .addressDetail(house.getAddressDetail())
                    .build();
        }
    }
}
