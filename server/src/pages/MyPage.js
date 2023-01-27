import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MyPage = () => {
  const routerView = useRef(null);

  return (
    <>
      <h1>안녕 난 마이페이지</h1>
      <div>
        안녕 나는 인간의 프로필이지
        <br />
        카드 상자 : 네비게이션임
        {/* 둘 다 */}
        <NavLink to={"consulting"}> 상담관리 |</NavLink>
        <NavLink to={"alert"}> 알림 |</NavLink>
        {/* 유저만 */}
        <NavLink to={"contract-user"}>유저 계약관리 |</NavLink>
        <NavLink to={"info-detail-user"}> 유저 상세 |</NavLink>
        <NavLink to={"info-modify-user"}> 유저 수정 |</NavLink>
        {/* 중개사만 */}
        <NavLink to={"contract-realtor"}>중개사 계약관리 |</NavLink>
        <NavLink to={"info-detail-realtor"}> 중개사 상세 |</NavLink>
        <NavLink to={"info-modify-realtor"}> 중개사 수정 |</NavLink>
      </div>
      <div id="router" ref={routerView}>
        <Outlet />
      </div>
    </>
  );
};

export default MyPage;
