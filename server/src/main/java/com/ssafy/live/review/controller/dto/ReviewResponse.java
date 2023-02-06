package com.ssafy.live.review.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.review.domain.entity.Review;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class ReviewResponse {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Reviews {
        private String personalInfo;
        private String name;
        private int ratingScore;
        private LocalDateTime time;
        private String reviewInfo;
        public static Reviews toEntity(Realtor realtor, Review review) {
            return Reviews.builder()
                    .personalInfo(realtor.getCorp())
                    .name(realtor.getName())
                    .ratingScore(review.getRatingScore())
                    .time(review.getCreatedDate())
                    .reviewInfo(review.getReviewInfo())
                    .build();
        }
        public static Reviews toEntity(Users users, Review review) {
            return Reviews.builder()
                    .personalInfo(users.getPhone())
                    .name(users.getName())
                    .ratingScore(review.getRatingScore())
                    .time(review.getCreatedDate())
                    .reviewInfo(review.getReviewInfo())
                    .build();
        }
    }
}
