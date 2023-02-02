package com.ssafy.live.consulting.controller.dto;

import javax.validation.constraints.NotEmpty;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

public class ConsultingRequest {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Reserve {

        @NotEmpty(message = "공인중개사 번호는 필수 입력값입니다.")
        private Long realtorNo;
        @NotEmpty(message = "고객 번호는 필수 입력값입니다.")
        private Long userNo;
        private LocalDateTime consultingDate;
        private String requirement;
        private boolean status;
        private List<Long> itemList;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ChangeStatus {

        private Long counsultingNo;
        private int status;
    }
}
