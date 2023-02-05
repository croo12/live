import { useState } from "react";
import ListBox from "../UI/ListBox";
import { REALTOR_STATUS, USER_STATUS } from "../pages/ConsultingPage";
import { ConsultingHouseCardContent } from "./HouseCardContent";
import { ConsultingReservationCardContent } from "./ReservationCardContent";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import HouseDetailCom from "./HouseDetailCom";
import classes from "./ConsultingRightBox.module.scss";

const ConsultingRightBox = ({
  statusChangeHandler,
  status,
  isRealtor,
  toggleListInMobile,
}) => {
  const [detail, setDetail] = useState(-1);
  const navigate = useNavigate();

  const clickHandler = () => {
    if (detail === -1) {
      setDetail(1);
    } else {
      setDetail(-1);
    }
  };

  return (
    <>
      <div className={classes.mobileBtn} onClick={toggleListInMobile}>
        올려 올려!
      </div>
      {isRealtor && REALTOR_STATUS.BEFORE_START === status && (
        <ListBox toStart={true} dataArray={[1, 2, 3]}>
          <ConsultingReservationCardContent
            isConsulting={true}
            statusChangeHandler={statusChangeHandler}
          />
        </ListBox>
      )}
      {((!isRealtor && detail === -1) ||
        (REALTOR_STATUS.BEFORE_START !== status && detail === -1)) && (
        <ListBox toStart={true} dataArray={[0, 1]}>
          <ConsultingHouseCardContent clickHandler={clickHandler} />
        </ListBox>
      )}
      {detail !== -1 && <HouseDetailCom isConsulting={true} />}
      {/* <Button
        clickEvent={() => {
          navigate("/");
        }}
      >
        통화종료
      </Button> */}
    </>
  );
};

export default ConsultingRightBox;
