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
    public static class ReservationInfo {

        private Long consultingNo;
        private Long realtorNo;
        private Long userNo;
        private String name;
        private String personalInfo;
        private String image;
        private String link;
        private LocalDateTime consultingDate;
        private int status;
        private String representativeItem;
        private int itemCount;

        public static ReservationInfo toResponse(Consulting consulting, Realtor realtor,
            String buildingName, int count) {
            return ReservationInfo.builder()
                .consultingNo(consulting.getNo())
                .realtorNo(realtor.getNo())
                .userNo(consulting.getUsers().getNo())
                .name(realtor.getName())
                .personalInfo(realtor.getCorp())
                .image(realtor.getImageSrc())
                .link(consulting.getLink())
                .consultingDate(consulting.getConsultingDate())
                .status(consulting.getStatus().getValue())
                .representativeItem(buildingName)
                .itemCount(count)
                .build();
        }

        public static ReservationInfo toResponse(Consulting consulting, Users user,
            String buildingName, int count) {
            return ReservationInfo.builder()
                .consultingNo(consulting.getNo())
                .realtorNo(user.getNo())
                .userNo(consulting.getUsers().getNo())
                .name(user.getName())
                .personalInfo(user.getPhone())
                .image(user.getImageSrc())
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
    public static class TodayConsulting {

        private Long consultingNo;
        private Long realtorNo;
        private Long userNo;
        private String userName;
        private String userPhone;
        private String userImage;
        private LocalDateTime consultingDate;
        private String representativeItem;
        private int itemCount;

        public static TodayConsulting toResponse(Consulting consulting, Users user,
            String buildingName, int count) {
            return TodayConsulting.builder()
                .consultingNo(consulting.getNo())
                .realtorNo(consulting.getRealtor().getNo())
                .userNo(consulting.getUsers().getNo())
                .userName(user.getName())
                .userPhone(user.getPhone())
                .userImage(user.getImageSrc())
                .consultingDate(consulting.getConsultingDate())
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
        private int status;
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
            private float exclusivePrivateArea;

            public static MyConsultingItem toResponse(Item item, House house, String imageSrc) {
                return ConsultingResponse.ReservationDetail.MyConsultingItem.builder()
                    .itemNo(item.getNo())
                    .deposit(item.getDeposit())
                    .rent(item.getRent())
                    .maintenanceFee(item.getMaintenanceFee())
                    .description(item.getDescription())
                    .buildingName(item.getHouse().getBuildingName())
                    .address(house.getAddress())
                    .addressDetail(house.getAddressDetail())
                    .imageSrc(imageSrc)
                    .exclusivePrivateArea(house.getExclusivePrivateArea())
                    .build();
            }
        }

        @Builder
        public static ReservationDetail toResponse(Long consultingNo, Consulting consulting,
            List<ConsultingResponse.ReservationDetail.MyConsultingItem> items) {
            return ReservationDetail.builder()
                .status(consulting.getStatus().getValue())
                .consultingNo(consultingNo)
                .consultingDate(consulting.getConsultingDate())
                .requirement(consulting.getRequirement())
                .itemList(items)
                .build();
        }
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class ItemForContract {

        private RealtorInfo realtorInfo;
        private UserInfo userInfo;
        private ItemInfo itemInfo;

        public static ItemForContract toResponse(RealtorInfo realtorInfo, UserInfo userInfo,
            ItemInfo itemInfo) {
            return ItemForContract.builder()
                .realtorInfo(realtorInfo)
                .userInfo(userInfo)
                .itemInfo(itemInfo)
                .build();
        }

        @Builder
        @Getter
        public static class RealtorInfo {

            private Long realtorNo;
            private String corp;
            private String name;
            private String phone;
            private String businessAddress;
            private String imageSrc;

            public static RealtorInfo toResponse(Realtor realtor) {
                return ConsultingResponse.ItemForContract.RealtorInfo.builder()
                    .realtorNo(realtor.getNo())
                    .corp(realtor.getCorp())
                    .name(realtor.getName())
                    .phone(realtor.getPhone())
                    .businessAddress(realtor.getBusinessAddress())
                    .imageSrc(realtor.getImageSrc())
                    .build();
            }
        }

        @Getter
        @Builder
        public static class UserInfo {

            private Long userNo;
            private String name;
            private String phone;
            private String gender;

            public static ConsultingResponse.ItemForContract.UserInfo toResponse(Users user) {
                return ConsultingResponse.ItemForContract.UserInfo.builder()
                    .userNo(user.getNo())
                    .name(user.getName())
                    .phone(user.getPhone())
                    .gender(user.getGender())
                    .build();
            }
        }

        @Getter
        @Builder
        public static class ItemInfo {

            private Long itemNo;
            private String address;
            private String buildingName;
            private int deposit;
            private int rent;
            private int maintenanceFee;
            private float area;
            private List<String> images;

            public static ItemForContract.ItemInfo toResponse(Item item, List<String> images) {
                return ItemForContract.ItemInfo.builder()
                    .itemNo(item.getNo())
                    .buildingName(item.getHouse().getBuildingName())
                    .address(item.getHouse().getAddress())
                    .rent(item.getRent())
                    .deposit(item.getDeposit())
                    .maintenanceFee(item.getMaintenanceFee())
                    .area(item.getHouse().getExclusivePrivateArea())
                    .images(images)
                    .build();
            }
        }
    }
}
