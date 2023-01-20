/**
 * 중개사 회원 로그인 폼
 */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import FindPassModalOverlay from "./FindPassModalOverlay";

const RealtorLoginForm = (props) => {
  const [findPassModalState, setFindPassModalState] = useState(null); // 비밀번호 찾기 state ( True => 모달 활성화)

  const businessNumberInputRef = useRef(); // 사업자등록번호 Ref
  const passwordInputRef = useRef(); // 비밀번호 Ref

  const loginModeHandler = () => {
    // 로그인 모드 변경
    props.onLoginModeChange("REALTOR");
  };

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
            findType="중개사"
            onFindPassword={findPasswordHandler}
            onModalStateChange={findPassModalStateChangeHandler}
          />
        </Modal>
      )}
      <form onSubmit={loginHandler}>
        <div>Logo</div>
        <Link onClick={loginModeHandler}>일반회원 로그인▶</Link>
        <div>
          <input
            id="businessNumber"
            type="text"
            placeholder="사업자등록번호"
            ref={businessNumberInputRef}
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

export default RealtorLoginForm;
