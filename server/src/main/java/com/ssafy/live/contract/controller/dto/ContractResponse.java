package com.ssafy.live.contract.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class ContractResponse {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ContractList {

        private Long contractNo;
        private MemberInfo memberInfo;
        private ItemInfo itemInfo;
        public static ContractList toEntity(Long contractNo, MemberInfo memberInfo, ItemInfo itemInfo) {
            return ContractList.builder()
                    .contractNo(contractNo)
                    .memberInfo(memberInfo)
                    .itemInfo(itemInfo)
                    .build();
        }
        @Getter
        @Builder
        public static class MemberInfo {
            private String name;
            private String imageSrc;
            private String desc;
            public static MemberInfo toRealtor(Realtor realtor) {
                return MemberInfo.builder()
                        .name(realtor.getName())
                        .imageSrc(realtor.getImageSrc())
                        .desc(realtor.getCorp())
                        .build();
            }
            public static MemberInfo toUser(Users users) {
                return MemberInfo.builder()
                        .name(users.getName())
                        .imageSrc(users.getImageSrc())
                        .desc(users.getPhone())
                        .build();
            }
        }
        @Getter
        @Builder
        public static class ItemInfo {
            private String buildingName;
            private String address;
            private int rent;
            private int deposit;
            private int maintenanceFee;
            public static ItemInfo toEntity(Item item) {
                return ItemInfo.builder()
                        .buildingName(item.getBuildingName())
                        .address(item.getHouse().getAddress())
                        .rent(item.getRent())
                        .deposit(item.getDeposit())
                        .maintenanceFee(item.getMaintenanceFee())
                        .build();
            }
        }
    }
}
