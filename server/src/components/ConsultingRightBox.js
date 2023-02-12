import { useState } from "react";
import ListBox from "../UI/ListBox";
import { REALTOR_STATUS } from "../pages/ConsultingPage";
import { ConsultingHouseCardContent } from "./HouseCardContent";
import { ConsultingReservationCardContent } from "./ReservationCardContent";
import { useNavigate } from "react-router-dom";
import classes from "./ConsultingRightBox.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const ConsultingRightBox = ({
  statusChangeHandler,
  status,
  isRealtor,
  toggleListInMobile,
  viewList,
}) => {
  const [detail, setDetail] = useState(-1);
  const navigate = useNavigate();

  const clickHandler = (idx) => {
    if (detail === -1) {
      setDetail(idx);
    } else {
      setDetail(-1);
    }
  };

  return (
    <>
      <div className={classes.mobileBtn} onClick={toggleListInMobile}>
        <GiHamburgerMenu />
      </div>
      <div
        className={`${classes.inner_content} ${
          viewList ? classes.isActive : ""
        }`}
      >
        {isRealtor && REALTOR_STATUS.BEFORE_START === status && (
          <ListBox
            toStart={true}
            dataArray={[{ idx: 0 }, { idx: 1 }, { idx: 2 }]}
          >
            <ConsultingReservationCardContent
              isConsulting={true}
              statusChangeHandler={statusChangeHandler}
            />
          </ListBox>
        )}
        {(!isRealtor || REALTOR_STATUS.BEFORE_START !== status) && (
          <ListBox toStart={true} dataArray={[{ idx: 0 }, { idx: 1 }]}>
            <ConsultingHouseCardContent
              clickHandler={clickHandler}
              detail={detail}
            />
          </ListBox>
        )}
      </div>
    </>
  );
};

export default ConsultingRightBox;
