import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <h1>안녕 난 마이페이지</h1>
      <Outlet />
    </>
  );
};

export default MyPage;
