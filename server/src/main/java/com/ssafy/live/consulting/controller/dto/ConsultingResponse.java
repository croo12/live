package com.ssafy.live.consulting.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.consulting.domain.entity.Consulting;
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

        @Builder
        public ReservationRealtor(Consulting consulting, Users user, int count, String buildingName) {
            this.consultingNo = consulting.getNo();
            this.realtorNo = consulting.getRealtor().getNo();
            this.userNo = user.getNo();
            this.userName = user.getName();
            this.userImage = user.getImageSrc();
            this.consultingDate = consulting.getConsultingDate();
            this.status = consulting.getStatus().getConsultingStatus();
            this.representativeItem = buildingName;
            this.itemCount = count;
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

        @Builder
        public ReservationUser(Consulting consulting, Realtor realtor, int count, String buildingName) {
            this.consultingNo = consulting.getNo();
            this.realtorNo = realtor.getNo();
            this.userNo = consulting.getUsers().getNo();
            this.realtorName = realtor.getName();
            this.realtorCorp = realtor.getCorp();
            this.realtorImage = realtor.getImageSrc();
            this.consultingDate = consulting.getConsultingDate();
            this.status = consulting.getStatus().getConsultingStatus();
            this.representativeItem = buildingName;
            this.itemCount = count;
        }
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class ReservationDetail {

        private Long consultingNo;
        private LocalDateTime consultingDate;
        private String requirement;
        List<Item> itemList;

        @Builder
        public ReservationDetail(Consulting consulting, List<Item> itemList) {
            this.consultingNo = consulting.getNo();
            this.consultingDate = consulting.getConsultingDate();
            this.requirement = consulting.getRequirement();
            this.itemList = itemList;
        }
    }
}
