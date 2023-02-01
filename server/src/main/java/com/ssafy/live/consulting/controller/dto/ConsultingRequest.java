package com.ssafy.live.consulting.controller.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

public class ConsultingRequest {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Reserve {

        private Long realtorNo;
        private Long userNo;
        private LocalDateTime consultingDate;
        private String requirement;
        private boolean status;
        private List<Long> itemList;
    }
}
