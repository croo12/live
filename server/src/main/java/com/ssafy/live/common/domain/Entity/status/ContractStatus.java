package com.ssafy.live.common.domain.Entity.status;

import com.amazonaws.services.kms.model.NotFoundException;
import java.util.Arrays;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ContractStatus {

    CONTRACT_APPROVING(0),
    CONTRACT_PROCESSING(1),
    CONTRACT_COMPLETE(2),
    CONTRACT_CANCEL(3);
    private int value;

    public static ContractStatus ofValue(int value) {
        return Arrays.stream(ContractStatus.values())
            .filter(v -> v.getValue() == value)
            .findAny()
            .orElseThrow(
                () -> new NotFoundException(String.format("상태코드에 [%s]가 존재하지 않습니다.", value)));
    }
}
