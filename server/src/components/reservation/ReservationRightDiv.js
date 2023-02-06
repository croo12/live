import ReservationRealtorInfo from "./ReservationRealtorInfo";
import classes from "./ReservationRightDiv.module.scss";

import { useState } from "react";
import Button from "../../UI/Button";

const ReservationRightDiv = () => {
  const [status, setStatus] = useState("none");

  const changeStataus = (status) => {
    setStatus(status);
  };

  return (
    <div className={classes.rightContainer}>
      <h2>오른쪽 박스</h2>
      {status === "none" && (
        <>
          <p>내가 누구냐고? 알필요 없다.</p>
          <Button clickEvent={() => changeStataus("realtor")}>
            중개사를 클릭했다 버튼
          </Button>
        </>
      )}
      {status === "realtor" && (
        <>
          <ReservationRealtorInfo />
        </>
      )}
    </div>
  );
};

export default ReservationRightDiv;
