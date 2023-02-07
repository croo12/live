package com.ssafy.live.house.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.common.domain.Entity.item.Direction;
import com.ssafy.live.common.domain.Entity.item.Entrance;
import com.ssafy.live.common.domain.Entity.item.Heating;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Set;

public class ItemRequest {


    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ItemRegistRequest{
        @NotBlank(message = "중개사 정보가 없습니다. 다시 로그인해주세요")
        private Long realtorNo;
        @NotBlank(message = "보증금을 입력하세요. 없을 경우 0을 입력하세요")
        private int deposit;
        @NotBlank(message = "월세를 입력하세요. 없을 경우 0을 입력하세요")
        private int rent;
        @NotBlank(message = "관리비를 입력하세요. 없을 경우 0을 입력하세요")
        private int maintenanceFee;
        private String buildingName;
        private String description;
        private LocalDate moveInDate;
        private Heating heating;
        private Direction direction;
        private Entrance entrance;

        @NotNull(message = "주택 정보가 없습니다.")
        private HouseRequest.HouseRegistRequest house;
        private ItemOptionRequest.ItemOptionRegistRequest itemOption;

        public Item toEntity(Realtor realtor, House house) {
            return Item.builder()
                    .realtor(realtor)
                    .house(house)
                    .deposit(deposit)
                    .rent(rent)
                    .maintenanceFee(maintenanceFee)
                    .buildingName(buildingName)
                    .description(description)
                    .moveInDate(moveInDate)
                    .heating(heating)
                    .direction(direction)
                    .entrance(entrance)
                    .build();
        }

    }

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ItemUpdateRequest{
        @NotBlank(message = "매물 정보가 없습니다.")
        private Long itemNo;
        @NotBlank(message = "보증금을 입력하세요. 없을 경우 0을 입력하세요")
        private int deposit;
        @NotBlank(message = "월세를 입력하세요. 없을 경우 0을 입력하세요")
        private int rent;
        @NotBlank(message = "관리비를 입력하세요. 없을 경우 0을 입력하세요")
        private int maintenanceFee;
        private String buildingName;
        private String description;
        private LocalDate moveInDate;
        private Heating heating;
        private Direction direction;
        private Entrance entrance;

        private Set<Long> itemImages;
        @NotNull(message = "주택 정보가 없습니다.")
        private ItemOptionRequest.ItemOptionRegistRequest itemOption;

        public Item toEntity() {
            return Item.builder()
                    .no(itemNo)
                    .deposit(deposit)
                    .rent(rent)
                    .maintenanceFee(maintenanceFee)
                    .buildingName(buildingName)
                    .description(description)
                    .moveInDate(moveInDate)
                    .heating(heating)
                    .direction(direction)
                    .entrance(entrance)
                    .itemOption(itemOption.toEntity(itemNo))
                    .build();
        }

    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ItemsByBuildingName {

        private Long realtorNo;
        private String word;
        private String sidoName;
        private String gugunName;
        private String dongName;
    }

}
