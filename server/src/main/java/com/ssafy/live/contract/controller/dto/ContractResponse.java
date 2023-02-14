package com.ssafy.live.contract.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
import java.time.LocalDate;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class ContractResponse {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ContractList {

        private Long contractNo;
        private MemberInfo memberInfo;
        private ItemInfo itemInfo;

        public static ContractList toEntity(Long contractNo, MemberInfo memberInfo,
            ItemInfo itemInfo) {
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
            private String gender;
            private int age;

            public static MemberInfo toRealtor(Realtor realtor) {
                return MemberInfo.builder()
                    .name(realtor.getName())
                    .imageSrc(realtor.getImageSrc())
                    .desc(realtor.getCorp())
                    .build();
            }

            public static MemberInfo toUser(Users users, int age) {
                return MemberInfo.builder()
                    .name(users.getName())
                    .imageSrc(users.getImageSrc())
                    .desc(users.getPhone())
                    .gender(users.getGender())
                    .age(age)
                    .build();
            }
        }

        @Getter
        @Builder
        public static class ItemInfo {

            private Long itemNo;
            private String buildingName;
            private String address;
            private String imageSrc;
            private int rent;
            private int deposit;
            private int maintenanceFee;
            private float exclusivePrivateArea;

            public static ItemInfo toEntity(Item item, String imageSrc) {
                return ItemInfo.builder()
                    .itemNo(item.getNo())
                    .buildingName(item.getHouse().getBuildingName())
                    .address(item.getHouse().getAddress())
                    .imageSrc(imageSrc)
                    .rent(item.getRent())
                    .deposit(item.getDeposit())
                    .maintenanceFee(item.getMaintenanceFee())
                    .exclusivePrivateArea(item.getHouse().getExclusivePrivateArea())
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
            private String phone;

            public static RealtorInfo toEntity(Realtor realtor) {
                return RealtorInfo.builder()
                    .corp(realtor.getCorp())
                    .name(realtor.getName())
                    .businessAddress(realtor.getBusinessAddress())
                    .imageSrc(realtor.getImageSrc())
                    .phone(realtor.getPhone())
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
            private float exclusivePrivateArea;
            private List<String> images;

            public static ItemInfo toEntity(Item item, List<String> images) {
                return ItemInfo.builder()
                    .address(item.getHouse().getAddress())
                    .buildingName(item.getHouse().getBuildingName())
                    .deposit(item.getDeposit())
                    .rent(item.getRent())
                    .mainteneceFee(item.getMaintenanceFee())
                    .exclusivePrivateArea(item.getHouse().getExclusivePrivateArea())
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
            private String tenantDetailAddress;

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
                    .tenantDetailAddress(contract.getTenantDetailAddress())
                    .build();
            }
        }
    }
}
