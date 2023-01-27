import { Outlet } from "react-router-dom";
import { usePrompt } from "../../util/usePrompt";

const MyContract = () => {
  console.log(usePrompt("정말로 나갈거임?", true));

  return (
    <>
      <h1>안녕 나는 마이페이지 - 계약</h1>
      <Outlet />
      {/*
      
      */}
    </>
  );
};

export default MyContract;
