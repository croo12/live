import React from "react";
import { Outlet } from "react-router-dom";

const SignUpPageUser = () => {
  const onChangeHanldler = (e) => {
    e.preventDefault();

    console.log(e.target.phone.value);
  };

  return (
    <>
      <form onSubmit={onChangeHanldler}>
        <div>
          <label htmlFor="user_id">아이디 </label>
          <input id="user_id" name="user_id" />
          <button>중복확인</button>
        </div>
        <div>
          <label htmlFor="user_pass">비밀번호 </label>
          <input id="user_pass" name="user_pass" />
        </div>
        <div>
          <label htmlFor="user_passcheck">비밀번호 확인 </label>
          <input id="user_passcheck" name="user_passcheck" />
        </div>
        <div>
          <label htmlFor="user_name">이름 </label>
          <input id="user_name" name="user_name" />
        </div>
        <div>
          <label htmlFor="user_email">이메일 </label>
          <input id="user_email" name="user_email" />
        </div>
        <div>
          <label htmlFor="user_phone">전화번호 </label>
          <input id="user_phone" name="user_phone" />
        </div>
        <button>회원 가입</button>
      </form>
      <Outlet />
    </>
  );
};

export default SignUpPageUser;
