import { useState } from "react";
import ListBox from "../UI/ListBox";
import { REALTOR_STATUS, USER_STATUS } from "../pages/ConsultingPage";
import HouseCardContent from "./HouseCardContent";
import ReservationCardContent from "./ReservationCardContent";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const ConsultingRightBox = ({ statusChangeHandler, status, isRealtor }) => {
  const [detail, setDetail] = useState(-1);
  const navigate = useNavigate();

  return (
    <>
      {isRealtor && REALTOR_STATUS.BEFORE_START === status && (
        <ListBox dataArray={[1, 2, 3]}>
          <ReservationCardContent
            isConsulting={true}
            statusChangeHandler={statusChangeHandler}
          />
        </ListBox>
      )}
      {((!isRealtor && detail === -1) ||
        (REALTOR_STATUS.BEFORE_START !== status && detail === -1)) && (
        <ListBox dataArray={[0, 1]}>
          <HouseCardContent />
        </ListBox>
      )}
      {detail !== -1 && <ReservationCardContent isConsulting={true} />}
      <Button
        clickEvent={() => {
          navigate("/");
        }}
      >
        나가기
      </Button>
    </>
  );
};

export default ConsultingRightBox;
