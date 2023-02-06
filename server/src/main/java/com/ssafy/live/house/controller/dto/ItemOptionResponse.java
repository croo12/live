package com.ssafy.live.house.controller.dto;

import lombok.*;

public class ItemOptionResponse {

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ItemOptionDetailResponse {

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

    }


}
