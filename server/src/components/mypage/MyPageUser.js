import { useState } from "react";

import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";

import classes from "./MyPageUser.module.scss";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../common/AuthProtector";
import sample from "../../assets/image/sample.jpg";

const MyPageUser = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/mypage/user-detail-info");
  };

  const [btnActive, setBtnActive] = useState(0);
  const { userInfo } = useAuth();

  const recordOnClickHandler = () => {
    setBtnActive(1);
    navigate("/mypage/user/user-record");
  };
  const reviewOnClickHadler = () => {
    setBtnActive(2);
    navigate("/mypage/user/user-review");
  };
  const contractOnClickHandler = () => {
    setBtnActive(3);
    navigate("/mypage/user/user-contract");
  };
  const reservationonClickHandler = () => {
    setBtnActive(4);
    navigate("/mypage/user/user-reservation");
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <div className={classes.intro}>
        <div className={classes.inner}>
          <div className={classes.introContent}>
            <div className={classes.info}>
              <div className={classes.leftImg}>
                <img alt="프로필" src={userInfo.profile !== null ? userInfo.profile : sample}></img>
              </div>
              <div className={classes.rightDesc}>
                <p>
                  안녕하세요, <strong>{userInfo.name}</strong>님<br />
                  <span>일반 회원</span>
                  <button className={classes.goDetail} onClick={onClickHandler}>
                    개인정보 조회
                  </button>
                </p>
                <div className={classes.temperature}>온도그래프</div>
                <progress className={classes.progress} value={userInfo.score} min="0" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.itemBox}>
        <div className={classes.inner}>
          <div className={classes.itemBoxContent}>
            <div className={`${btnActive === 1 ? classes.active : ""}`}>
              <button className={classes.menuCard} onClick={recordOnClickHandler}>
                <AiOutlineVideoCameraAdd />
                <p>녹화</p>
              </button>
            </div>
            <div className={`${btnActive === 2 ? classes.active : ""}`}>
              <button className={classes.menuCard} onClick={reviewOnClickHadler}>
                <BsFillBellFill />
                <p>리뷰조회</p>
              </button>
            </div>
            <div className={`${btnActive === 3 ? classes.active : ""}`}>
              <button className={classes.menuCard} onClick={contractOnClickHandler}>
                <BsSearch />
                <p>계약현황</p>
              </button>
            </div>
            <div className={`${btnActive === 4 ? classes.active : ""}`}>
              <button className={classes.menuCard} onClick={reservationonClickHandler}>
                <TfiWrite />
                <p>예약현황</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MyPageUser;
