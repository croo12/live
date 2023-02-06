import { useRef, useState } from "react";
import classes from "./MyPage.module.scss";
import { BsPersonLinesFill, BsFillBellFill, BsSearch } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import MyInfoDetailUser from "../components/mypage/MyInfoDetail";
import MyIntro from "../components/mypage/MyIntro";
import MyAlert from "../components/mypage/MyAlert";
import MyReview from "../components/mypage/MyReview";
import MyReservation from "../components/mypage/MyReservation";
import { Outlet } from "react-router-dom";

const MyPage = () => {
  const routerView = useRef(null);

  const [btnActive, setBtnActive] = useState(0);
  const [infoDetail, setInfoDetail] = useState(null);

  const privacyOnclickHandler = () => {
    setBtnActive(1);
  };

  const alarmonClickHandler = () => {
    setBtnActive(2);
  };

  const reviewonClickHandler = () => {
    setBtnActive(3);
  };

  const reservationonClickHandler = () => {
    setBtnActive(4);
  };

  return (
    <>
      <MyIntro />
      {infoDetail === null ? (
        <MyInfoDetailUser infoState={setInfoDetail} />
      ) : (
        <Outlet />
      )}
      <div className={classes.itemBox}>
        <div className={classes.inner}>
          <div className={classes.itemBoxContent}>
            <div className={classes.privacy}>
              <button onClick={privacyOnclickHandler}>
                <div className={classes.leftLogo}>
                  <BsPersonLinesFill style={{ color: "42D395" }} />
                </div>
                <div className={classes.rightDesc}>
                  <strong>계약</strong>
                </div>
              </button>
            </div>
            <div className={classes.alarm}>
              <button onClick={alarmonClickHandler}>
                <div className={classes.leftLogo}>
                  <BsFillBellFill style={{ color: "42D395" }} />
                </div>
                <div className={classes.rightDesc} style={{}}>
                  <strong>알람</strong>
                </div>
              </button>
            </div>
            <div className={classes.review}>
              <button onClick={reviewonClickHandler}>
                <div className={classes.leftLogo}>
                  <BsSearch style={{ color: "42D395", fontSize: "1.8rem" }} />
                </div>
                <div className={classes.rightDesc}>
                  <strong>리뷰조회</strong>
                </div>
              </button>
            </div>
            <div className={classes.reservation}>
              <button onClick={reservationonClickHandler}>
                <div className={classes.leftLogo}>
                  <TfiWrite style={{ color: "42D395", fontSize: "1.8rem" }} />
                </div>
                <div className={classes.rightDesc}>
                  <strong>예약현황</strong>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {btnActive === 1 && <MyInfoDetailUser />} */}
      {btnActive === 2 && <MyAlert />}
      {btnActive === 3 && <MyReview />}
      {btnActive === 4 && <MyReservation />}
    </>
  );
};

export default MyPage;
