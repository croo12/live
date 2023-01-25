import React from "react";
import { Outlet } from "react-router-dom";

const SignUpPageRealtor = () => {
  const onChangeHanldler = (e) => {
    e.preventDefault();

    console.log(e.target.phone.value);
  };

  return (
    <>
      <form onSubmit={onChangeHanldler}>
        <button>조회하기</button>
        <div>
          <label htmlFor="business_number">사업자 상호 </label>
          <input id="business_number" name="business_number" />
        </div>
        <div>
          <label htmlFor="realtor_name">사업자 대표명 </label>
          <input id="realtor_name" name="realtor_name" />
        </div>
        <div>
          <label htmlFor="Field">중개등록번호</label>
          <input id="Field" name="Field" />
        </div>
        <div>
          <label htmlFor="business_address">주소</label>
          <input id="business_address" name="business_address" />
        </div>
        <div>
          <label htmlFor="realtor_phone">전화번호</label>
          <input id="realtor_phone" name="realtor_phone" />
        </div>
        <div>
          <label htmlFor="realtor_email">이메일</label>
          <input id="realtor_email" name="realtor_email" />
        </div>
        <div>
          <label htmlFor="business_number">사업자 등록번호</label>
          <input id="business_number" name="business_number" />
          <button>중복확인</button>
        </div>
        <div>
          <label htmlFor="realtor_pass">비밀번호</label>
          <input id="realtor_pass" name="realtor_pass" />
        </div>
        <div>
          <label htmlFor="realtor_passcheck">비밀번호 확인</label>
          <input id="realtor_passcheck" name="realtor_passcheck" />
        </div>
        <button>중개사 가입</button>
      </form>
      <Outlet />
    </>
  );
};

export default SignUpPageRealtor;
