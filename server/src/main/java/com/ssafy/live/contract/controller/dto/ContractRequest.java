package com.ssafy.live.contract.controller.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

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
        private int termOfContract;
    }

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Update {

        private Long contractNo;
        private int deposit;
        private int rent;
        private int maintenanceFee;
        private LocalDate moveOnDate;
        private int termOfContract;
        private String specialContract;
        private int commission;
    }
}
