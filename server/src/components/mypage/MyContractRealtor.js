import { Outlet } from "react-router-dom";
import { usePrompt } from "../../util/usePrompt";

const MyContractRealtor = () => {
  console.log(usePrompt("안녕", true));

  return (
    <>
      <h3>계약 관리 - 중개인</h3>
      {/*
      
      */}
      <Outlet />
    </>
  );
};

export default MyContractRealtor;
