import { useEffect, useRef, useState } from "react";
import classes from "./MyPage.module.scss";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import MyInfoDetail from "../components/mypage/MyInfoDetail";
import MyIntro from "../components/mypage/MyIntro";
// import MyAlert from "../components/mypage/MyAlert";
import MyReview from "../components/mypage/MyReview";
import MyReservation from "../components/mypage/MyReservation";
import MyInfoModify from "../components/mypage/MyInfoModify";
import axiosInstance from "../util/axios";

const MyPage = () => {
  const routerView = useRef(null);

  const [btnActive, setBtnActive] = useState(0);

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

  const [infoState, setInfoState] = useState(null);

  const onInfoChangeHandler = (infoState) => {
    setInfoState(infoState);
  };

  return (
    <>
      <MyIntro />
      {infoState === null ? (
        <MyInfoDetail onInfoChangeHandler={onInfoChangeHandler} />
      ) : (
        <MyInfoModify onInfoChangeHandler={onInfoChangeHandler} />
      )}
      <div className={classes.itemBox}>
        <div className={classes.inner}>
          <div className={classes.itemBoxContent}>
            <div
              className={`${classes.privacy} ${
                btnActive === 1 ? classes.active : ""
              }`}
            >
              <button onClick={privacyOnclickHandler}>
                <div className={classes.leftLogo}>
                  <AiOutlineVideoCameraAdd />
                </div>
                <div className={classes.rightDesc}>
                  <strong>녹화</strong>
                </div>
              </button>
            </div>
            <div
              className={`${classes.alarm} ${
                btnActive === 2 ? classes.active : ""
              }`}
            >
              <button onClick={alarmonClickHandler}>
                <div className={classes.leftLogo}>
                  <BsFillBellFill />
                </div>
                <div className={classes.rightDesc} style={{}}>
                  <strong>알람</strong>
                </div>
              </button>
            </div>
            <div
              className={`${classes.review} ${
                btnActive === 3 ? classes.active : ""
              }`}
            >
              <button onClick={reviewonClickHandler}>
                <div className={classes.leftLogo}>
                  <BsSearch />
                </div>
                <div className={classes.rightDesc}>
                  <strong>리뷰조회</strong>
                </div>
              </button>
            </div>
            <div
              className={`${classes.reservation} ${
                btnActive === 4 ? classes.active : ""
              }`}
            >
              <button onClick={reservationonClickHandler}>
                <div className={classes.leftLogo}>
                  <TfiWrite />
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
      {/* {btnActive === 2 && <MyAlert />} */}
      {btnActive === 3 && <MyReview />}
      {btnActive === 4 && <MyReservation />}
    </>
  );
};

export default MyPage;
