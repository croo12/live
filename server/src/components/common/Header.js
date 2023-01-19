import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1> 안녕 나는 tmp헤더 </h1>
      <NavLink to={"/"}>홈</NavLink>
      <NavLink to={"/login"}> 로그인 </NavLink>
      <NavLink to={"/signup"}> 회원가입 </NavLink>
      <NavLink to={"/reservation"}> 예약 </NavLink>
      <NavLink to={"/consulting"}> 상담 </NavLink>
      <NavLink to={"/mypage"}> 나 </NavLink>
      <NavLink to={"/house"}> 매물 </NavLink>
    </div>
  );
};

export default Header;
