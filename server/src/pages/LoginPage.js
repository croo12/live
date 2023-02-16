import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RealtorLoginForm from "../components/login/RealtorLoginForm";
import UserLoginForm from "../components/login/UserLoginForm";
import {
  userLogin,
  logout,
  realtorLogin,
  getUserInfo,
  getRealtorInfo,
} from "../apis/MemberService";
import classes from "./LoginPage.module.scss";
import { useAuth } from "../components/common/AuthProtector";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/user-slice";

const LoginPage = () => {
  const [loginMode, setLoginMode] = useState("USER"); // 로그인 모드 상태 확인 ( USER , REALTOR )
  const { userInfo, doLogin, doLogout } = useAuth();
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const loginModeHandler = (event) => {
    // 로그인 모드 변경 함수
    setLoginMode(event.target.value);
  };

  const userLoginHandler = async (userLoginInfo) => {
    // 일반 회원 로그인 처리
    // 일반회원 로그인 정보 아이디, 비밀번호 형태로 넘어옵니다.

    try {
      const result = await userLogin(userLoginInfo, dispatch);
      if (result.message) {
        return result.message;
      }

      const { accessToken } = result;

      console.log("유저 로그인 성공");
      dispatch(userAction.setIsRealtor(false));

      const userInfo = await getUserInfo(accessToken);
      console.log(userInfo);

      const tmp = {};
      tmp["profile"] = userInfo.imageSrc;
      tmp["id"] = userInfo.id;
      tmp["isRealtor"] = false;
      tmp["name"] = userInfo.name;
      tmp["score"] = userInfo.score;

      dispatch(userAction.setInfo(tmp));

      navigation("/");
    } catch (err) {
      console.log(err);
    }
  };

  const realtorLoginHandler = async (realtorLoginInfo) => {
    // 중개사 회원 로그인 처리
    // try {
    const tmp = {};

    // console.log(realtorLoginInfo);

    const { accessToken } = await realtorLogin(realtorLoginInfo, dispatch);

    console.log("중개사 로그인 성공");
    dispatch(userAction.setIsRealtor(true));

    const realtorInfo = await getRealtorInfo(accessToken);
    console.log(realtorInfo);

    tmp["profile"] = realtorInfo.imageSrc;
    tmp["id"] = "중개사는 이런거없음";
    tmp["isRealtor"] = true;
    tmp["name"] = realtorInfo.name;

    dispatch(userAction.setInfo(tmp));

    navigation("/");
  };

  return (
    <div className={classes.login}>
      <div className={classes.section}>
        <div className={classes.loginArea}>
          <div className={classes.loginHead}>LIVE</div>
          <div className={classes.loginBox}>
            <div className={classes.loginTab}>
              <input
                type="radio"
                name="loginTab"
                id="userTab"
                onChange={loginModeHandler}
                value="USER"
                defaultChecked //defaultChecked 말고 그냥 checked 하면 체이닝 어쩌구하면서 에러 폭발함
              />
              <label htmlFor="userTab">일반 회원</label>
              <input
                type="radio"
                name="loginTab"
                id="realtorTab"
                onChange={loginModeHandler}
                value="REALTOR"
              />
              <label htmlFor="realtorTab">공인중개사</label>
            </div>
            {loginMode === "USER" && (
              <UserLoginForm onUserLogin={userLoginHandler} />
            )}
            {loginMode === "REALTOR" && (
              <RealtorLoginForm onRealtorLogin={realtorLoginHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
