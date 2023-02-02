package com.ssafy.live.common.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ConsultingStatus {

    RESERVERVATION_PROCESSING("예약 신청"),
    REALTOR_RESPONSE_COMPLETE("공인중개사 응답완료"),
    CONSULTING_CONFIRMED("예약 확정"),
    CONSULTING_RPOCESSING("상담 진행중"),
    CONSULTING_PAST("과거 예약");

    private final String consultingStatus;
}
