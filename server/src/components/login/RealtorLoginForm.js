/**
 * 중개사 회원 로그인 폼
 */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import FindPassModalOverlay from "./FindPassModalOverlay";

import classes from "./RealtorLoginForm.module.scss";

const RealtorLoginForm = (props) => {
  const [isFindPassword, setIsFindPassword] = useState(false); // 비밀번호 찾기 state ( True => 모달 활성화)

  const businessNumberInputRef = useRef(); // 사업자등록번호 Ref
  const passwordInputRef = useRef(); // 비밀번호 Ref

  const loginHandler = (event) => {
    // 중개사 회원 로그인 처리
    event.preventDefault();
    const realtorLoginInfo = {
      businessNumber: businessNumberInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    props.onRealtorLogin(realtorLoginInfo);
  };

  const findPasswordHandler = (realtorFindPasswordInfo) => {
    // 비밀번호 찾기

    console.log(realtorFindPasswordInfo); //모달에서 받은 사업자 번호,email 정보

    // 입력 값 존재하는 지 검사

    // 사업자 등록 번호 유효성 검사

    // 이메일 유효섣 검사

    // 비밀번호 찾기 email 맞는지 검사 and 전송 하는 과정

    findPasswordModalHandler(); // 모달창 닫기
  };

  const findPasswordModalHandler = () => {
    // 모달 창 상태 값 통해 열고 닫기
    setIsFindPassword(!isFindPassword);
  };

  return (
    <>
      {isFindPassword && (
        <Modal onConfirm={findPasswordModalHandler}>
          <FindPassModalOverlay
            findType="중개사"
            onFindPassword={findPasswordHandler}
            onModalStateChange={findPasswordModalHandler}
          />
        </Modal>
      )}

      <form onSubmit={loginHandler}>
        <div className={classes.loginFieldSet}>
          <div className={classes.formInner}>
            <div className={classes.inputBox}>
              <label htmlFor="businessNumber">사업자등록번호</label>
              <input
                id="businessNumber"
                type="text"
                placeholder="사업자등록번호 입력"
                ref={businessNumberInputRef}
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
          <div className={classes.formUtil}>
            <div className={classes.keepLogin}>
              <input type="checkbox" id="keepLogin" />
              <label>로그인 상태 유지</label>
            </div>
            <div className={classes.connList}>
              <Link to="/signup/realtor">회원가입</Link> |{" "}
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

export default RealtorLoginForm;
