/**
 * 일반 회원 로그인 폼
 */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import FindPassModalOverlay from "./FindPassModalOverlay";

const UserLoginForm = (props) => {
  const [findPassModalState, setFindPassModalState] = useState(null); // 비밀번호 찾기 state ( True => 모달 활성화)

  const userIdInputRef = useRef();
  const passwordInputRef = useRef();

  const loginModeHandler = () => {
    // 로그인 모드(회원,중개사) 변경
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

  const findPasswordHandler = (userFindPasswordInfo) => {
    // 비밀번호 찾기

    // 비밀번호 찾기 email 맞는지 검사 and 전송 하는 과정

    findPassModalStateChangeHandler(); // 모달창 닫기
  };

  const findPassModalStateChangeHandler = () => {
    // 모달 창 상태 값 통해 열고 닫기
    if (findPassModalState === null) {
      setFindPassModalState(true);
      return;
    }
    setFindPassModalState(null);
  };

  return (
    <>
      {findPassModalState && (
        <Modal onConfirm={findPassModalStateChangeHandler}>
          <FindPassModalOverlay
            findType="일반회원"
            onFindPassword={findPasswordHandler}
            onModalStateChange={findPassModalStateChangeHandler}
          />
        </Modal>
      )}

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
        <Link onClick={findPassModalStateChangeHandler}>
          비밀번호를 잊으셨나요?
        </Link>
      </form>
    </>
  );
};

export default UserLoginForm;
