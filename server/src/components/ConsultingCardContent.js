import { NavLink } from "react-router-dom";
import classes from "./ConsultingCardContent.module.scss";

const ConsultingCardContent = (props) => {
  //상태에 따라 상태 문구가 달라진다

  //유저인가? 중개사인가?
  const isUser = props.isUser;

  //요청중, 응답완료

  //       >> 유저 입장
  //       Fix 전
  //       - 요청중 : 예약취소 버튼
  //       - 응답 완료 : 예약취소, 예약 확정 버튼
  //       Fix 후 상담 전
  //       - 확정됨 : 예약취소 버튼
  //       상담 후
  //       - 리뷰 쓰기 (리뷰가 없다면)
  //       - 녹화 영상 시청 가능
  //       - 계약 버튼

  //       >> 중개사 입장
  //       Fix 전 :
  //       - 예약 거절 버튼
  //       Fix 후 상담 전
  //       - 예약 취소 버튼
  //       상담 후
  //       - 중개사의 뿌듯함?

  return (
    <>
      <div className={classes.content}>
        <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
      </div>
      <div className={classes.info}>
        <NavLink>예약 상세보기</NavLink>
        <h3>예약 중? 현재 상태에 따라 </h3>
        <h3>상담일시</h3>
        <h4>날짜맨</h4>
        <p className={classes.bio}> ~외 n 건</p>
      </div>
      {/* <p>( 중개업자 || 유저정보 프로필) 상담일</p>
      <p>~외 n 건, 버튼이 달라짐</p>
      <p>클릭하면 예약 상세 열람 가능</p> */}
    </>
  );
};

export default ConsultingCardContent;
