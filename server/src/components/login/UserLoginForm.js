/**
 * 일반 회원 로그인 폼
 */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import FindPassModalOverlay from "./FindPassModalOverlay";

import classes from "./UserLoginForm.module.scss";

const UserLoginForm = (props) => {
  const [isFindPassword, setIsFindPassword] = useState(false); // 비밀번호 찾기 state ( True => 모달 활성화)

  const [loginError, setLoginError] = useState(0);

  const userIdInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = (event) => {
    // 일반 회원 로그인 처리
    event.preventDefault();

    const id = userIdInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!id) {
      setLoginError(3);
      return;
    }

    if (!password) {
      setLoginError(4);
      return;
    }

    const userLoginInfo = {
      id,
      password,
    };

    props.onUserLogin(userLoginInfo);
  };

  //88888888888888888888888만들어야함888888888888888888888888888888888888
  const findPasswordHandler = (userFindPasswordInfo) => {
    // 비밀번호 찾기

    // 비밀번호 찾기 email 맞는지 검사 and 전송 하는 과정
    console.log("비밀번호 찾기 아직 없음", userFindPasswordInfo);

    findPasswordModalHandler(); // 모달창 닫기
  };
  //888888888888888888888888888888888888888888888888888888888888888888888

  const findPasswordModalHandler = () => {
    // 모달 창 상태 값 통해 열고 닫기
    setIsFindPassword(!isFindPassword);
  };

  const showErrorMessage = (loginError) => {
    switch (loginError) {
      case 0:
        return ``;
      case 1:
        return `존재하지 않는 아이디입니다.`;
      case 2:
        return `회원 정보가 틀렸습니다.`;
      case 3:
        return `아이디가 입력되지 않았습니다`;
      case 4:
        return `비밀번호가 입력되지 않았습니다`;
      default:
        return ``;
    }
  };

  return (
    <>
      {isFindPassword && (
        <Modal onConfirm={findPasswordModalHandler}>
          <FindPassModalOverlay
            findType="일반회원"
            onFindPassword={findPasswordHandler}
            onModalStateChange={findPasswordModalHandler}
          />
        </Modal>
      )}

      <form onSubmit={loginHandler}>
        <div className={classes.loginFieldSet}>
          <div className={classes.formInner}>
            <div className={classes.inputBox}>
              <label htmlFor="userId">아이디</label>
              <input
                id="userId"
                type="text"
                placeholder="아이디 입력"
                ref={userIdInputRef}
              ></input>
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호 입력"
                ref={passwordInputRef}
              ></input>
            </div>
          </div>
          {loginError !== 0 && <div> {showErrorMessage(loginError)} </div>}
          <div className={classes.formUtil}>
            <div className={classes.keepLogin}>
              <input type="checkbox" id="keepLogin" />
              <label>로그인 상태 유지</label>
            </div>
            <div className={classes.connList}>
              <Link to="/signup/user">회원가입</Link> |{" "}
              <Link onClick={findPasswordModalHandler}>비밀번호 찾기</Link>
            </div>
          </div>
          <div className={classes.formBtn}>
            <button type="submit">로그인</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserLoginForm;
