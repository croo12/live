package com.ssafy.live.house.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.common.domain.Entity.item.Direction;
import com.ssafy.live.common.domain.Entity.item.Entrance;
import com.ssafy.live.common.domain.Entity.item.Heating;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.entity.ItemOption;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class ItemDto {

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
        private String description;
        private LocalDate moveInDate;
        private Heating heating;
        private Direction direction;
        private Entrance entrance;

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

        //Option
        private boolean bed;
        private boolean washingMachine;
        private boolean airConditioner;
        private boolean desk;
        private boolean closet;
        private boolean bath;
        private boolean sink;
        private boolean cctv;
        private boolean diningTable;
        private boolean sofa;
        private boolean shoeRack;
        private boolean refrigerator;
        private boolean dryingMachine;
        private boolean bathtub;
        private boolean bidet;
        private boolean dishwasher;
        private boolean gasStove;
        private boolean inductionCooktop;
        private boolean microwave;
        private boolean oven;
        private boolean guard;
        private boolean intercom;
        private boolean keycard;
        private boolean elevator;
        private boolean fireAlarm;
        private boolean veranda;
        private boolean terrace;
        private boolean garden;
        private boolean parkingLot;


        public House toHouseEntity(){
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
                    .build();
        }

        public Item toItemEntity(Realtor realtor, House house) {
            return Item.builder()
                    .realtor(realtor)
                    .house(house)
                    .deposit(deposit)
                    .rent(rent)
                    .maintenanceFee(maintenanceFee)
                    .description(description)
                    .moveInDate(moveInDate)
                    .heating(heating)
                    .direction(direction)
                    .entrance(entrance)
                    .build();
        }

        public ItemOption toItemOptionEntity(Long itemNo) {
            return ItemOption.builder()
                    .bed(bed)
                    .washingMachine(washingMachine)
                    .airConditioner(airConditioner)
                    .desk(desk)
                    .closet(closet)
                    .bath(bath)
                    .sink(sink)
                    .cctv(cctv)
                    .diningTable(diningTable)
                    .sofa(sofa)
                    .shoeRack(shoeRack)
                    .refrigerator(refrigerator)
                    .dryingMachine(dryingMachine)
                    .bathtub(bathtub)
                    .bidet(bidet)
                    .dishwasher(dishwasher)
                    .gasStove(gasStove)
                    .inductionCooktop(inductionCooktop)
                    .microwave(microwave)
                    .oven(oven)
                    .guard(guard)
                    .intercom(intercom)
                    .keycard(keycard)
                    .elevator(elevator)
                    .fireAlarm(fireAlarm)
                    .veranda(veranda)
                    .terrace(terrace)
                    .garden(garden)
                    .parkingLot(parkingLot)
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
