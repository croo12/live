package com.ssafy.live.consulting.controller.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class ConsultingResponse {

    @Builder
    @Getter
    @AllArgsConstructor
    public static class ReservationRealtor {

        private Long consultingNo;
        private Long realtorNo;
        private Long userNo;
        private String userName;
        private String userImage;
        private LocalDateTime consultingDate;
        private int status;
        private String representativeItem;
        private int itemCount;
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class ReservationUser {

        private Long consultingNo;
        private Long realtorNo;
        private Long userNo;
        private String realtorName;
        private String realtorCorp;
        private String realtorImage;
        private LocalDateTime consultingDate;
        private int status;
        private String representativeItem;
        private int itemCount;
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class ReservationDetail {

        private Long consultingNo;
        private LocalDateTime consultingDate;
        private String requirement;
        List<MyConsultingItem> itemList;

        @Builder
        @Getter
        public static class MyConsultingItem {
            private Long itemNo;
            private int deposit;
            private int rent;
            private int maintenanceFee;
            private String description;
            private String buildingName;
            private String address;
            private String addressDetail;
        }
    }
}
