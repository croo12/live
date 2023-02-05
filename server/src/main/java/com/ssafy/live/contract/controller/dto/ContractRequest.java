package com.ssafy.live.contract.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public class ContractRequest {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Regist {

        @NotNull(message = "공인중개사 번호는 필수 입력값입니다.")
        private Long realtorNo;
        @NotNull(message = "고객 번호는 필수 입력값입니다.")
        private Long userNo;
        @NotNull(message = "매물 번호는 필수 입력값입니다.")
        private Long itemNo;
        private LocalDate moveOnDate;
        private int numberOfResidents;
        private String specialContract;
        private String tenantAddress;
        private int tenantAge;
        private int commission;
    }
}
