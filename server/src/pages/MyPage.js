import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../components/common/AuthProtector";

const MyPage = () => {
  const { userInfo } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    if (userInfo.isRealtor) {
      navigation("/mypage/realtor");
    } else {
      navigation("/mypage/user");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default MyPage;
