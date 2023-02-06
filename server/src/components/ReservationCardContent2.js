import { NavLink, useNavigate } from "react-router-dom";
import classes from "./ReservationCardContent2.module.scss";
import sample from "../assets/image/sample.jpg";

const ReservationCardContent2 = ({
  realtoroffice,
  realtorname,
  consultingdate,
  consultinglocation,
}) => {
  const navigate = useNavigate();
  const onDetailHandler = () => {
    navigate("/consulting/consulting-detail");
  };
  //상태에 따라 상태 문구가 달라진다

  //유저인가? 중개사인가?
  // const isUser = props.isUser;

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
    <div className={classes.content}>
      <div className={classes.leftContent}>
        <div className={classes.leftImg}>
          <img src={sample} />
        </div>
        <div className={classes.rightDesc}>
          <div className={classes.personalInfo}>
            <p>
              {realtoroffice}
              <br />
              <strong>{realtorname}</strong>
            </p>
          </div>
          <div className={classes.consultingInfo}>
            <div className={classes.consultingDate}>
              <p>
                상담일시
                <br />
                <strong>{consultingdate}</strong>
              </p>
            </div>
            <div className={classes.consultingLocation}>
              <p>
                장소
                <br />
                <strong>{consultinglocation}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContent}>
        <div>
          <button className={classes.btn1} onClick={onDetailHandler}>
            예약 상세보기
          </button>
          <button className={classes.btn2}>상담 바로가기</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCardContent2;
export const DUMMY5 = [
  {
    realtoroffice: "SSAFY 공인중개사 사무소",
    realtorname: "김희연",
    consultingdate: "1월 25일 (수)",
    consultinglocation: "싸피 하우스 외 5건",
  },
  {
    realtoroffice: "SSAFY 공인중개사 사무소",
    realtorname: "김희연",
    consultingdate: "1월 25일 (수)",
    consultinglocation: "싸피 하우스 외 5건",
  },
];
