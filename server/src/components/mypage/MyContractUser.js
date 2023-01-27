import { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { usePrompt } from "../../util/usePrompt";

const MyContractUser = () => {
  console.log(usePrompt("안녕", true));

  return (
    <>
      <h3>계약 관리 - 유저</h3>
      {/*
      
      */}
      <Outlet />
    </>
  );
};

export default MyContractUser;
