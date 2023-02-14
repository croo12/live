package com.ssafy.live.consulting.controller.dto;

import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.notice.domain.entity.Notice;
import java.io.File;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

public class ConsultingRequest {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Reserve {

        @NotNull(message = "공인중개사 번호는 필수 입력값입니다.")
        private Long realtorNo;
        private LocalDateTime consultingDate;
        private String requirement;
        private List<Long> itemList;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class AddItem {

        private Set<Long> itemList;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class AddLink {

        private String link;

        public static Notice toEntity(Consulting consulting, ConsultingRequest.AddLink link) {
            return Notice.builder()
                .link(link.getLink())
                .realtor(consulting.getRealtor())
                .users(consulting.getUsers())
                .noticeWriter(consulting.getRealtor().getName())
                .noticeInfo(consulting.getUsers().getName() + "님, 곧 상담이 시작됩니다. 상담실에 접속하여 주세요.")
                .build();
        }
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ChangeStatus {

        private Long consultingNo;
        private int status;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class SaveRec {

        private Long consultingNo;
        private List<MultipartFile> multiFileList;
    }
}
