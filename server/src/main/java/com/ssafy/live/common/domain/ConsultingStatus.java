package com.ssafy.live.common.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ConsultingStatus {

    RESERVERVATION_PROCESSING(0), // 예약 신청 중
    REALTOR_RESPONSE_COMPLETE(1), // 공인중개사 응답완료
    CONSULTING_CONFIRMED(2), // 예약 확정
    CONSULTING_RPOCESSING(3), // 상담 진행중
    CONSULTING_PAST(4), // 과거 예약
    CONSULTING_CANCLED(5); // 거절, 취소
    private final int consultingStatus;

    public static ConsultingStatus[] setStatus(int status){
        if(status == 0)
            return new ConsultingStatus[]{RESERVERVATION_PROCESSING, REALTOR_RESPONSE_COMPLETE};
        else if(status == 1) {
            return new ConsultingStatus[]{CONSULTING_CONFIRMED, CONSULTING_RPOCESSING};
        }else {
            return new ConsultingStatus[]{CONSULTING_PAST, CONSULTING_PAST};
        }
    }
}
