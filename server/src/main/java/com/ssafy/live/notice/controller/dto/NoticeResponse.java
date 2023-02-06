package com.ssafy.live.notice.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.notice.domain.entity.Notice;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class NoticeResponse {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Notices {
        private LocalDateTime noticeDate;
        private String noticeInfo;
        private String noticeWriter;
        public static Notices toEntity(Notice notice) {
            return Notices.builder()
                    .noticeDate(notice.getCreatedDate())
                    .noticeInfo(notice.getNoticeInfo())
                    .noticeWriter(notice.getNoticeWriter())
                    .build();
        }
    }
}
