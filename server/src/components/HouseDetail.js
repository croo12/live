import { useEffect } from "react";
import HouseDetailCom from "./HouseDetailCom";
import classes from "./HouseDetail.module.scss";

const HouseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.houseDetail}>
      <HouseDetailCom />
    </div>
  );
};

export default HouseDetail;
