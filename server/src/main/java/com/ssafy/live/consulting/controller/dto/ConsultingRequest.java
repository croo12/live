package com.ssafy.live.consulting.controller.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

public class ConsultingRequest {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Reserve {

        @NotNull(message = "공인중개사 번호는 필수 입력값입니다.")
        private Long realtorNo;
        @NotNull(message = "고객 번호는 필수 입력값입니다.")
        private Long userNo;
        private LocalDateTime consultingDate;
        private String requirement;
        private List<Long> itemList;
    }

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class AddItem {
        private Set<Long> itemList;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ChangeStatus {

        private Long counsultingNo;
        private int status;
    }
}
