import React, { isValidElement, useState } from "react";
import { Outlet } from "react-router-dom";

const SignUpPageUser = () => {
  const onChange = (e) => {
    console.log(e.target.value.user_id);
  };

  const [form, setForm] = useState({
    user_id: "",
    user_pass: "",
    user_passcheck: "",
    user_name: "",
    user_email: "",
    user_phone: "",
  });

  return (
    <>
      <form onSubmit={onChange}>
        <div>
          <label htmlFor="user_id">아이디 </label>
          <input
            id="user_id"
            name="user_id"
            type="text"
            value={form.user_id}
            onChange={(e) => setForm({ ...form, user_id: e.target.value })}
            valid={!isValidElement.isId}
            valueType={"user_id"}
          />
          <button>중복확인</button>
        </div>
        <div>
          <label htmlFor="user_pass">비밀번호 </label>
          <input
            id="user_pass"
            name="user_pass"
            type="password"
            value={form.user_pass}
            onChange={(e) => setForm({ ...form, user_pass: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="user_passcheck">비밀번호 확인 </label>
          <input
            id="user_passcheck"
            name="user_passcheck"
            type="password"
            value={form.user_passcheck}
            onChange={(e) =>
              setForm({ ...form, user_passcheck: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="user_name">이름 </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            value={form.user_name}
            onChange={(e) => setForm({ ...form, user_name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="user_email">이메일 </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            value={form.user_email}
            onChange={(e) => setForm({ ...form, user_email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="user_phone">전화번호 </label>
          <input
            id="user_phone"
            name="user_phone"
            type="text"
            value={form.user_phone}
            onChange={(e) => setForm({ ...form, user_phone: e.target.value })}
          />
        </div>
        <button>회원 가입</button>
      </form>
      <Outlet />
    </>
  );
};

export default SignUpPageUser;
