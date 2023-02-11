import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RealtorLoginForm from "../components/login/RealtorLoginForm";
import UserLoginForm from "../components/login/UserLoginForm";
import {
  userLogin,
  logout,
  realtorLogin,
  getUserInfo,
} from "../apis/MemberService";
import classes from "./LoginPage.module.scss";
import { useAuth } from "../components/common/AuthProtector";

const LoginPage = () => {
  const [loginMode, setLoginMode] = useState("USER"); // 로그인 모드 상태 확인 ( USER , REALTOR )
  const { userInfo, doLogin, doLogout } = useAuth();
  const navigation = useNavigate();

  const loginModeHandler = (event) => {
    // 로그인 모드 변경 함수
    setLoginMode(event.target.value);
  };

  const userLoginHandler = async (userLoginInfo) => {
    // 일반 회원 로그인 처리
    // 일반회원 로그인 정보 아이디, 비밀번호 형태로 넘어옵니다.

    try {
      const tmp = {
        accessToken: null,
        refreshToken: null,
        name: null,
        id: null,
        isRealtor: null,
      };

      const result = await userLogin(userLoginInfo);
      const accessToken = result?.data.data.accessToken;
      const refreshToken = result?.data.data.refreshToken;
      console.log(accessToken);
      if (accessToken) {
        tmp["accessToken"] = accessToken;
        tmp["refreshToken"] = refreshToken;

        const response = await getUserInfo(accessToken);
        const data = response?.data.data;

        console.log(response);

        tmp["id"] = data.id;
        tmp["name"] = data.name;
        tmp["isRealtor"] = false;

        if (data) {
          doLogin(tmp);
        } else {
          console.log(result);
        }
      } else {
        throw new Error(`로그인 실패`);
      }
    } catch (err) {
      console.log(err);
      console.log(`hi`);
    }
  };

  const realtorLoginHandler = async (realtorLoginInfo) => {
    // 중개사 회원 로그인 처리

    realtorLogin(realtorLoginInfo).then((result) => console.log(result));
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
