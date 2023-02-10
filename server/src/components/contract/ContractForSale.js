import { useState } from "react";

import classes from "./ContractForSale.module.scss";
import sample from "../../assets/image/sample.jpg";
import { ContractHouseCardContent } from "../HouseCardContent";

const ContractForSale = () => {
  const ContractInfo = {
    houseNumber: "25801470",
    houseAddress: "대전 유성구 수통골로 55번길 127",
    houseRoomCnt: 1,
    houseSupplyArea: 26,
    houseExclusivePrivateArea: 8,
    houseDeposit: 1000,
    houseMonthlyFee: 90,
    housePrice: "월세 1000/90",
    houseExtraFee: 10,
    houseMonth: 12,
    houseMoveIn: "2023-01-13",
  };
  return (
    <div className={classes.contractForSale}>
      <ContractHouseCardContent ContractInfo={ContractInfo} />
    </div>
  );
};

export default ContractForSale;
