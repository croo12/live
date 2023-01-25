import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs";

const SignUpPage = () => {
  return (
    <>
      <h1>안녕 나는 회원가입 페이지</h1>
      <Tabs />
      <Outlet />
    </>
  );
};

export default SignUpPage;
