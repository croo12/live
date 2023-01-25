import { useState } from "react";
import RealtorLoginForm from "../components/login/RealtorLoginForm";
import UserLoginForm from "../components/login/UserLoginForm";
import Card from "../UI/Card";

const LoginPage = () => {
  const [loginMode, setLoginMode] = useState("USER"); // 로그인 모드 상태 확인 ( USER , REALTOR )

  const loginChangeHandler = (mode) => {
    // 로그인 모드 변경 함수
    if (mode === "USER") {
      setLoginMode("REALTOR");
      return;
    }
    setLoginMode("USER");
  };

  const userLoginHandler = (userLoginInfo) => {
    // 일반 회원 로그인 처리
    console.log(userLoginInfo); // 일반회원 로그인 정보 아이디, 비밀번호 형태로 넘어옵니다.
  };

  const realtorLoginHandler = (realtorLoginInfo) => {
    // 중개사 회원 로그인 처리
    console.log(realtorLoginInfo); // 중개사회원 로그인 정보 아이디, 비밀번호 형태로 넘어옵니다.
  };

  return (
    <>
      <h1>안녕 나는 로그인 페이지</h1>
      <Card>
        {loginMode === "USER" && (
          <UserLoginForm
            onLoginModeChange={loginChangeHandler}
            onUserLogin={userLoginHandler}
          />
        )}
        {loginMode === "REALTOR" && (
          <RealtorLoginForm
            onLoginModeChange={loginChangeHandler}
            onRealtorLogin={realtorLoginHandler}
          />
        )}
      </Card>
    </>
  );
};

export default LoginPage;
