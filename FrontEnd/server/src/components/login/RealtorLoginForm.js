/**
 * 중개사 회원 로그인 폼
 */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";

const RealtorLoginForm = (props) => {
  const [findPassword, setFindPassword] = useState(null); // 비밀번호 찾기 state ( True => 모달 활성화)

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

  const findPasswordHandler = () => {
    if (findPassword === null) {
      setFindPassword(true);
      return;
    }
    setFindPassword(null);
  };

  console.log(findPassword);

  return (
    <>
      {findPassword && (
        <Modal onConfirm={findPasswordHandler}>
          <form>
            <input type="text" placeholder="아이디"></input>
            <input type="text" placeholder="이메일"></input>
            <p>일치하는 메일로 비밀번호 전송</p>
          </form>
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
          <Link onClick={findPasswordHandler}>비밀번호를 잊으셨나요?</Link>
        </div>
      </form>
    </>
  );
};

export default RealtorLoginForm;
