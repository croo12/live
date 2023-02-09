package com.ssafy.live.contract.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ContractDetail {

        private RealtorInfo realtorInfo;
        private UserInfo userInfo;
        private ItemInfo itemInfo;
        private ContractInfo contractInfo;

        public static ContractDetail toEntity(RealtorInfo realtorInfo, UserInfo userInfo,
            ItemInfo itemInfo, ContractInfo contractInfo) {
            return ContractDetail.builder()
                .realtorInfo(realtorInfo)
                .userInfo(userInfo)
                .itemInfo(itemInfo)
                .contractInfo(contractInfo)
                .build();
        }

        @Getter
        @Builder
        public static class RealtorInfo {
            private String corp;
            private String name;
            private String businessAddress;
            private String imageSrc;
            public static RealtorInfo toEntity(Realtor realtor) {
                return RealtorInfo.builder()
                    .corp(realtor.getCorp())
                    .name(realtor.getName())
                    .businessAddress(realtor.getBusinessAddress())
                    .imageSrc(realtor.getImageSrc())
                    .build();
            }
        }

        @Getter
        @Builder
        public static class UserInfo {
            private String name;
            private String phone;
            private String gender;
            public static UserInfo toEntity(Users user) {
                return UserInfo.builder()
                    .name(user.getName())
                    .phone(user.getPhone())
                    .gender(user.getGender())
                    .build();
            }
        }

        @Getter
        @Builder
        public static class ItemInfo {
            private String address;
            private String buildingName;
            private int deposit;
            private int rent;
            private int mainteneceFee;
            private List<String> images;
            public static ItemInfo toEntity(Item item, List<String> images) {
                return ItemInfo.builder()
                    .address(item.getHouse().getAddress())
                    .buildingName(item.getBuildingName())
                    .deposit(item.getDeposit())
                    .rent(item.getRent())
                    .mainteneceFee(item.getMaintenanceFee())
                    .images(images)
                    .build();
            }
        }

        @Getter
        @Builder
        public static class ContractInfo {
            private LocalDate moveOnDate;
            private int numberOfResidents;
            private String specialContract;
            private int downPayment;
            private int balance;
            private int commission;
            private int termOfContract;
            private int tenantAge;
            private String tenantAddress;
            public static ContractInfo toEntity(Contract contract) {
                return ContractInfo.builder()
                    .moveOnDate(contract.getMoveOnDate())
                    .numberOfResidents(contract.getNumberOfResidents())
                    .specialContract(contract.getSpecialContract())
                    .downPayment(contract.getDownPayment())
                    .balance(contract.getBalance())
                    .commission(contract.getCommission())
                    .termOfContract(contract.getTermOfContract())
                    .tenantAge(contract.getTenantAge())
                    .tenantAddress(contract.getTenantAddress())
                    .build();
            }
        }
    }
}
