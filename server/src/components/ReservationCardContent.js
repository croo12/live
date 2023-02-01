import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./ReservationCardContent.module.scss";
import totoro from "../assets/image/sample.jpg";

const ReservationCardContent = (props) => {
  const [isConsulting, setConsulting] = useState(props.isConsulting);
  const realtor = useRef(props.isRealtor);

  const clickEventHandler = () => {
    if (props.statusChangeHandler) props.statusChangeHandler("house");
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
