import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const ReservationCardContent = (props) => {
  const [isConsulting, setConsulting] = useState(props.isConsulting);

  const clickEventHandler = () => {
    if (props.statusChangeHandler) props.statusChangeHandler("house");
  };

  return (
    <>
      <Link>예약 상세보기▶</Link>
      <p>고객 사진 || 고객 이름</p>
      <p>상담 일시</p>
      <p>예약 정보</p>
      {!isConsulting && <button>상담 바로가기</button>}
      {isConsulting && <Button clickEvent={clickEventHandler}>상담하기</Button>}
    </>
  );
};

export default ReservationCardContent;
