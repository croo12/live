import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./ReservationCardContent.module.scss";
import totoro from "../assets/image/sample.jpg";
import { STATUS } from "../pages/ConsultingPage";

const ReservationCardContent = (props) => {
  const [isConsulting, setConsulting] = useState(props.isConsulting);
  const realtor = useRef(props.isRealtor);

  const clickEventHandler = () => {
    if (props.statusChangeHandler)
      props.statusChangeHandler(STATUS.REALTOR_START_CONSULTING);
  };

  return (
    <div className={classes.cardBox}>
      <div>
        <img src={totoro} alt="totoro"></img>
        <p>{realtor ? `고객맨` : `중개사맨`} </p>
      </div>
      <div>
        <Link>예약 상세보기▶</Link>
        <p>상담 일시</p>
        <p>예약 정보</p>
        {!isConsulting && <button>상담 바로가기</button>}
        {isConsulting && (
          <Button clickEvent={clickEventHandler}>상담하기</Button>
        )}
      </div>
    </div>
  );
};

export default ReservationCardContent;

export const ConsultingReservationCardContent = (props) => {
  const [isConsulting, setConsulting] = useState(props.isConsulting);
  const realtor = useRef(props.isRealtor);
  const navigation = useNavigate();

  const clickEventHandler = () => {
    if (props.statusChangeHandler) {
      props.statusChangeHandler(STATUS.REALTOR_START_CONSULTING);
    }

    navigation(
      `/consulting/${props.sessionId}/${props.consultingNo}/${props.realtorNo}/${props.userNo}`
    );
  };

  return (
    <div className={classes.consultingCardBox}>
      <div>
        <img src={props.image ? props.image : totoro} alt="totoro"></img>
        <p>{props.name} </p>
      </div>
      <div>
        <Link>예약 상세보기▶</Link>
        <p>{props.consultingDate.substring(0, 10)}</p>
        <p>예약 정보</p>
        {!isConsulting && <button>상담 바로가기</button>}
        {isConsulting && (
          <Button clickEvent={clickEventHandler}>상담하기</Button>
        )}
      </div>
    </div>
  );
};

export const DUMMY4 = [
  {
    image: totoro,
    name: "김희연",
    date: "2023-02-01",
    time: "12:30",
    location: "대전",
    state: "종료",
    detail: "상세보기",
    cancel: "취소 불가",
    confirm: "예약 확정",
  },
  {
    image: totoro,
    name: "김희연",
    date: "2023-02-01",
    time: "12:30",
    location: "대전",
    state: "종료",
    detail: "상세보기",
    cancel: "취소 불가",
    confirm: "예약 확정",
  },
  {
    image: totoro,
    name: "김희연",
    date: "2023-02-01",
    time: "12:30",
    location: "대전",
    state: "종료",
    detail: "상세보기",
    cancel: "취소 불가",
    confirm: "예약 확정",
  },
];
