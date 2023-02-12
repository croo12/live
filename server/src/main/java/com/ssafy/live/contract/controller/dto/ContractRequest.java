package com.ssafy.live.contract.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
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
        private static LocalDate moveOnDate;
        private static int numberOfResidents;
        private static String specialContract;
        private static String tenantAddress;
        private static String tenantDetailAddress;
        private static int tenantAge;
        private static int commission;
        private static int termOfContract;

        public static Contract toEntity(Users users, Realtor realtor, Item item) {
            return Contract.builder()
                    .users(users)
                    .realtor(realtor)
                    .item(item)
                    .moveOnDate(moveOnDate)
                    .numberOfResidents(numberOfResidents)
                    .contractState(ContractStatus.CONTRACT_APPROVING)
                    .specialContract(specialContract)
                    .tenantAddress(tenantAddress)
                    .tenantDetailAddress(tenantDetailAddress)
                    .tenantAge(tenantAge)
                    .commission(commission)
                    .downPayment((item.getDeposit() / 100) * 10)
                    .balance((item.getDeposit() / 100) * 90)
                    .termOfContract(termOfContract)
                    .build();
        }
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
