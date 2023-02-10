package com.ssafy.live.notice.controller.dto;

import com.ssafy.live.notice.domain.entity.Notice;
import lombok.*;

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
