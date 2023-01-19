/**
 * 일반 회원 로그인 폼
 */

import { useRef } from "react";
import { Link } from "react-router-dom";

const UserLoginForm = (props) => {
  const userIdInputRef = useRef();
  const passwordInputRef = useRef();

  const loginModeHandler = () => {
    // 로그인 모드 변경
    props.onLoginModeChange("USER");
  };

  const loginHandler = (event) => {
    // 일반 회원 로그인 처리
    event.preventDefault();
    const userLoginInfo = {
      userId: userIdInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    props.onUserLogin(userLoginInfo);
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <div>Logo</div>
        <Link onClick={loginModeHandler}>공인중개사 로그인▶</Link>
        <div>
          <input
            id="userId"
            type="text"
            placeholder="아이디"
            ref={userIdInputRef}
          ></input>
        </div>
        <div>
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            ref={passwordInputRef}
          ></input>
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </>
  );
};

export default UserLoginForm;
