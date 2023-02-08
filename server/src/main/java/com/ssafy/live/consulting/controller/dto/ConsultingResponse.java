package com.ssafy.live.consulting.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
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

        public static ReservationRealtor toResponse(Consulting consulting, Users user, String buildingName, int count) {
            return ReservationRealtor.builder()
                    .consultingNo(consulting.getNo())
                    .realtorNo(consulting.getRealtor().getNo())
                    .userNo(user.getNo())
                    .userName(user.getName())
                    .userImage(user.getImageSrc())
                    .consultingDate(consulting.getConsultingDate())
                    .status(consulting.getStatus().getValue())
                    .representativeItem(buildingName)
                    .itemCount(count)
                    .build();
        }
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

        public static ReservationUser toEntity(Consulting consulting, Realtor realtor, String buildingName, int count) {
            return ReservationUser.builder()
                    .consultingNo(consulting.getNo())
                    .realtorNo(realtor.getNo())
                    .userNo(consulting.getUsers().getNo())
                    .realtorName(realtor.getName())
                    .realtorCorp(realtor.getCorp())
                    .realtorImage(realtor.getImageSrc())
                    .consultingDate(consulting.getConsultingDate())
                    .status(consulting.getStatus().getValue())
                    .representativeItem(buildingName)
                    .itemCount(count)
                    .build();
        }
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
            private String imageSrc;

            public static MyConsultingItem toEntity(Item item, House house) {
                return ConsultingResponse.ReservationDetail.MyConsultingItem.builder()
                        .itemNo(item.getNo())
                        .deposit(item.getDeposit())
                        .rent(item.getRent())
                        .maintenanceFee(item.getMaintenanceFee())
                        .description(item.getDescription())
                        .buildingName(item.getBuildingName())
                        .address(house.getAddress())
                        .addressDetail(house.getAddressDetail())
                        .build();
            }
        }

        @Builder
        public static ReservationDetail toEntity(Long consultingNo, Consulting consulting,List<ConsultingResponse.ReservationDetail.MyConsultingItem> items) {
            return ReservationDetail.builder()
                    .consultingNo(consultingNo)
                    .consultingDate(consulting.getConsultingDate())
                    .requirement(consulting.getRequirement())
                    .itemList(items)
                    .build();
        }
    }
}
