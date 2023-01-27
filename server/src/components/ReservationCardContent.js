import { Link } from "react-router-dom";

const ReservationCardContent = (props) => {
  return (
    <>
      <Link>예약 상세보기▶</Link>
      <p>고객 사진 || 고객 이름</p>
      <p>상담 일시</p>
      <p>예약 정보</p>
      <button>상담 바로가기</button>
    </>
  );
};

export default ReservationCardContent;
