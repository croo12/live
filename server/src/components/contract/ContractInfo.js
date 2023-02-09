import { useState } from "react";

import Card from "../../UI/Card";
import { RealtorContractCardContent } from "../RealtorCardContent";
import classes from "./ContractInfo.module.scss";
import sample from "../../assets/image/sample.jpg";

const ContractInfo = () => {
  const realtorInfo = {
    image: sample,
    realtoroffice: "SSAFY 공인중개사무소",
    starNum: 4.8,
    name: "김희연",
    realtorInfo: "경력 15년·평균 15분 내 응답",
    realtorAddress: "대전 광역시 유성구 덕명동 124",
    realtorPhone: "0507-1402-7961",
  };

  return (
    <div className={classes.contractInfo}>
      <div className={classes.inner}>
        <div className={classes.infoContent}>
          <h2>계약정보</h2>
          <Card>
            <RealtorContractCardContent data={realtorInfo} />
          </Card>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ContractInfo;
