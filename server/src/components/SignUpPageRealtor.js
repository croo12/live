import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const SignUpPageRealtor = () => {
  const onChangeHanldler = (e) => {
    e.preventDefault();

    console.log(e.target.phone.value);
  };

  const [realtorEmail, setRealtorEmail] = useState("");
  const [realtorPass, setRealtorPass] = useState("");
  const [realtorPassCheck, setRealtorPassCheck] = useState("");

  const [realtorEmailError, setRealtorEmailError] = useState(false);
  const [realtorPassError, setRealtorPassError] = useState(false);
  const [realtorPassCheckError, setRealtorPassCheckError] = useState(false);

  const onChangeRealtorEmail = (e) => {
    if (e.target.value.includes("@")) setRealtorEmailError(false);
    else setRealtorEmailError(true);

    setRealtorEmail(e.target.value);
  };

  const onChangeRealtorPass = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$^*+=-])(?=.*[0-9]){9,16}/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setRealtorPassError(false);
    else setRealtorPassError(true);

    if (!realtorPassCheck || e.target.value === realtorPassCheck) {
      setRealtorPassCheckError(false);
    } else setRealtorPassCheckError(true);

    setRealtorPass(e.target.value);
  };

  const onChangeRealtorPassCheck = (e) => {
    if (e.target.value === realtorPass) setRealtorPassCheckError(false);
    else setRealtorPassCheckError(true);

    setRealtorPassCheck(e.target.value);
  };

  return (
    <>
      <form onSubmit={onChangeHanldler}>
        <button>조회하기</button>
        <div>
          <label htmlFor="businessNumber">사업자 상호 </label>
          <input id="businessNumber" name="businessNumber" type="text" />
        </div>
        <div>
          <label htmlFor="realtorName">사업자 대표명 </label>
          <input id="realtorName" name="realtorName" type="text" />
        </div>
        <div>
          <label htmlFor="field">중개등록번호</label>
          <input id="field" name="field" type="text" />
        </div>
        <div>
          <label htmlFor="businessAddress">주소</label>
          <input id="businessAddress" name="businessAddress" type="text" />
        </div>
        <div>
          <label htmlFor="realtorPhone">전화번호</label>
          <input id="realtorPhone" name="realtorPhone" type="text" />
        </div>
        <div>
          <label htmlFor="realtorEmail">이메일</label>
          <input
            id="realtorEmail"
            name="realtorEmail"
            type="email"
            value={realtorEmail}
            onChange={onChangeRealtorEmail}
          />
          {realtorEmailError && (
            <div style={{ color: "red" }}>올바른 이메일 형식이 아닙니다!</div>
          )}
        </div>
        <div>
          <label htmlFor="businessNumber">사업자 등록번호</label>
          <input id="businessNumber" name="businessNumber" type="text" />
          <button>중복확인</button>
        </div>
        <div>
          <label htmlFor="realtorPass">비밀번호</label>
          <input
            id="realtorPass"
            name="realtorPass"
            type="text"
            value={realtorPass}
            onChange={onChangeRealtorPass}
          />
          {realtorPassError && (
            <div style={{ color: "red" }}>
              비밀번호는 문자,숫자,특수문자를 조합하여 9자이상 16자 이내이어야
              합니다.
            </div>
          )}
        </div>
        <div>
          <label htmlFor="realtorPassCheck">비밀번호 확인</label>
          <input
            id="realtorPassCheck"
            name="realtorPassCheck"
            type="text"
            value={realtorPassCheck}
            onChange={onChangeRealtorPassCheck}
          />
        </div>
        {realtorPassCheckError && (
          <div style={{ color: "red" }}>비밀번호 입력값이 다릅니다!</div>
        )}
        <button>중개사 가입</button>
      </form>
      <Outlet />
    </>
  );
};

export default SignUpPageRealtor;
