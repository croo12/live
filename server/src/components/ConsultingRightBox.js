import { useEffect, useState } from "react";
import ListBox from "../UI/ListBox";
import HouseCardContent from "./HouseCardContent";
import ReservationCardContent from "./ReservationCardContent";

const ConsultingRightBox = ({ isRealtor }) => {
  const [status, setStatus] = useState(isRealtor ? "reservation" : "house");

  useEffect(() => {
    setStatus(isRealtor ? "reservation" : "house");
  }, [isRealtor]);

  const statusChangeHandler = (action) => {
    const confirm = window.confirm;

    if (confirm(`정말로 `)) setStatus(action);
  };

  return (
    <>
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
