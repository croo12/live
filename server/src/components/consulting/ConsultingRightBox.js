import { useEffect, useState } from "react";
import ListBox from "../../UI/ListBox";
import { REALTOR_STATUS } from "../../pages/ConsultingPage";
import { ConsultingHouseCardContent } from "../HouseCardContent";
import { ConsultingReservationCardContent } from "../ReservationCardContent";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./ConsultingRightBox.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  getConsultingDetail,
  getConsultingList,
} from "../../apis/consultingApi";

const ConsultingRightBox = ({
  sessionId,
  statusChangeHandler,
  status,
  isRealtor,
  toggleListInMobile,
  viewList,
}) => {
  const [detail, setDetail] = useState(-1);
  const navigate = useNavigate();

  const [consultingList, setConsultingList] = useState([]);
  const [consultingHouseList, setConsultingHouseList] = useState([]);

  const clickHandler = (idx) => {
    if (detail === -1) {
      setDetail(idx);
    } else {
      setDetail(-1);
    }
  };

  useEffect(() => {
    (async () => {
      if (isRealtor && REALTOR_STATUS.BEFORE_START === status) {
        const result = await getConsultingList(5);
        setConsultingList(result);
      } else {
        const result = await getConsultingDetail(1);
        setConsultingHouseList(result);
      }
    })();
  }, [isRealtor, status]);

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
        <Outlet
          context={{ sessionId, statusChangeHandler, clickHandler, detail }}
        />
      </div>
    </>
  );
};

export default ConsultingRightBox;
