package com.ssafy.live.review.controller.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

public class ReviewRequest {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Regist {

        @NotNull(message = "공인중개사 번호는 필수 입력값입니다.")
        private Long realtorNo;
        @NotNull(message = "고객 번호는 필수 입력값입니다.")
        private Long userNo;
        @NotNull(message = "상담 번호는 필수 입력값입니다.")
        private Long consultingNo;
        private String reviewInfo;
        private int ratingScore;
        private int iscontract;
    }
}
