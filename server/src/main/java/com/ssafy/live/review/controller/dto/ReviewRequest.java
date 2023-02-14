package com.ssafy.live.review.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.review.domain.entity.Review;
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

        public static Review toEntity(Realtor realtor, Users users, Consulting consulting,
            String reviewInfo, int ratingScore) {
            return Review.builder()
                .realtor(realtor)
                .users(users)
                .consulting(consulting)
                .reviewInfo(reviewInfo)
                .ratingScore(ratingScore)
                .build();
        }
    }
}
