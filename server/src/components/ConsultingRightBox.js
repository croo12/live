import { useState } from "react";
import ListBox from "../UI/ListBox";
import HouseCardContent from "./HouseCardContent";
import ReservationCardContent from "./ReservationCardContent";

const ConsultingRightBox = (props) => {
  const [status, setStatus] = useState("reservation"); //중개사만 이걸로 시작해야함

  const statusChangeHandler = (action) => {
    console.log("짜잔");
    setStatus(action);
  };

  return (
    <>
      <h2>화상통화 오른쪽 상자</h2>
      {status === "reservation" && (
        <ListBox dataArray={[1, 2, 3]}>
          <ReservationCardContent
            isConsulting={true}
            statusChangeHandler={statusChangeHandler}
          />
        </ListBox>
      )}
      {status === "house" && (
        <ListBox dataArray={[0, 1]}>
          <HouseCardContent />
        </ListBox>
      )}
      {status === "houseDetail" && (
        <ReservationCardContent isConsulting={true} />
      )}
    </>
  );
};

export default ConsultingRightBox;
