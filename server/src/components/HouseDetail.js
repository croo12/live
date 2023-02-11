import { useEffect } from "react";
import HouseDetailCom from "./HouseDetailCom";
import classes from "./HouseDetail.module.scss";

const HouseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.houseDetail}>
      <h1>안녕 나는 매물 - 매물 상세</h1>
      {/*
        /// 공인중개사들 탭 -> 유저가 매물 검색으로 들어갔을 때만 -> 다른 컴포넌트로 이사가기
      */}
      <HouseDetailCom />
    </div>
  );
};

export default HouseDetail;
