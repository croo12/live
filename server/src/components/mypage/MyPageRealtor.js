import { useState } from "react";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import classes from "./MyPageRealtor.module.scss";
import sample from "../../assets/image/sample.jpg";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../common/AuthProtector";

const MyPageRealtor = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/mypage/realtor-detail-info");
  };

  const { userInfo, doLogout } = useAuth();

  console.log(userInfo);

  const [btnActive, setBtnActive] = useState(0);

  const alarmonClickHandler = () => {
    setBtnActive(1);
  };
  const reviewonClickHandler = () => {
    setBtnActive(2);
  };
  const reservationonClickHandler = () => {
    setBtnActive(3);
  };
  return (
    <>
      <div className={classes.intro}>
        <div className={classes.inner}>
          <div className={classes.introContent}>
            <div className={classes.info}>
              <div className={classes.leftImg}>
                <img src={sample}></img>
              </div>
              <div className={classes.rightDesc}>
                <p>
                  안녕하세요, <strong>{userInfo.name}</strong>님<br />
                  <span>중개사 회원</span>
                  <button onClick={onClickHandler}>개인정보 조회</button>
                </p>
                <div className={classes.temperature}>별점 ★ 4.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.itemBox}>
        <div className={classes.inner}>
          <div className={classes.itemBoxContent}>
            <div
              className={`${classes.alarm} ${
                btnActive === 1 ? classes.active : ""
              }`}
            >
              <button onClick={alarmonClickHandler}>
                <div className={classes.leftLogo}>
                  <BsFillBellFill />
                </div>
                <div className={classes.rightDesc}>
                  <strong>알람</strong>
                </div>
              </button>
            </div>
            <div
              className={`${classes.review} ${
                btnActive === 2 ? classes.active : ""
              }`}
            >
              <button onClick={reviewonClickHandler}>
                <div className={classes.leftLogo}>
                  <BsSearch />
                </div>
                <div className={classes.rightDesc}>
                  <strong>계약현황</strong>
                </div>
              </button>
            </div>
            <div
              className={`${classes.reservation} ${
                btnActive === 3 ? classes.active : ""
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
    </>
  );
};

export default MyPageRealtor;
