import { useState } from "react";
import classes from "./ContractForSale.module.scss";
import { ContractHouseCardContent } from "../HouseCardContent";
import { ContractDetailUserCardContent } from "../HouseCardContent";
import { ContractDetailRealtorCardContent } from "../HouseCardContent";

const ContractForSale = (props) => {
  const ContractInfo = {
    houseNumber: props.itemInfoList.itemNo,
    houseName: props.itemInfoList.buildingName,
    houseAddress: props.itemInfoList.address,
    houseSupplyArea: props.itemInfoList.area,
    houseExclusivePrivateArea: props.itemInfoList.mainteneceFee,
    houseDeposit: props.itemInfoList.deposit,
    houseMonthlyFee: props.itemInfoList.rent,
    houseExtraFee: props.itemInfoList.maintenanceFee,
    houseImage: props.itemInfoList.images,
  };

  return (
    <div className={classes.contractForSale}>
      <ContractHouseCardContent ContractInfo={ContractInfo} fx2={props.fx} />
    </div>
  );
};

export default ContractForSale;

export const ContractForSaleDetailUser = (props) => {
  const ContractInfo = {
    houseNumber: props.itemInfoList.itemNo,
    houseName: props.itemInfoList.buildingName,
    houseAddress: props.itemInfoList.address,
    houseSupplyArea: props.itemInfoList.exclusivePrivateArea,
    houseDeposit: props.itemInfoList.deposit, // 보증금
    houseMonthlyFee: props.itemInfoList.rent, // 월세
    houseExtraFee: props.itemInfoList.mainteneceFee, // 관리비
    houseTermOfContract: props.contractInfoList.termOfContract, // 계약기간
    houseMoveOnDate: props.contractInfoList.termOfContract, // 입주 희망일
    houseImage: props.itemInfoList.images, // 매물 이미지
  };

  return (
    <div className={classes.contractForSale}>
      <ContractDetailUserCardContent ContractInfo={ContractInfo} />
    </div>
  );
};

export const ContractForSaleDetailRealtor = (props) => {
  const ContractInfo = {
    houseNumber: props.itemInfoList.itemNo,
    houseName: props.itemInfoList.buildingName,
    houseAddress: props.itemInfoList.address,
    houseSupplyArea: props.itemInfoList.exclusivePrivateArea,
    houseDeposit: props.itemInfoList.deposit, // 보증금
    houseMonthlyFee: props.itemInfoList.rent, // 월세
    houseExtraFee: props.itemInfoList.mainteneceFee, // 관리비
    houseTermOfContract: props.contractInfoList.termOfContract, // 계약기간
    houseMoveOnDate: props.contractInfoList.termOfContract, // 입주 희망일
    houseImage: props.itemInfoList.images,
  };
  return (
    <div className={classes.contractForSale}>
      <ContractDetailRealtorCardContent
        ContractInfo={ContractInfo}
        fx2={props.fx}
      />
    </div>
  );
};
