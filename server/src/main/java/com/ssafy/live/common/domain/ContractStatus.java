package com.ssafy.live.common.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ContractStatus {

    CONTRACT_APPROVING(0), // 승인 중
    CONTRACT_PROCESSING(1), // 계약 진행 중
    CONTRACT_COMPLETE(2); // 계약 완료
    private final int consultingStatus;
}
