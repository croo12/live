import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../../assets/image/liveLogo.png";
import { makeUUID } from "../../util/UUID";
const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} className={classes.logo} />
      <span className={classes.nav}>
        <NavLink to={"/"} style={{ textDecoration: "none", color: "black" }}>
          홈
        </NavLink>
        <NavLink
          to={"/login"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          로그인{" "}
        </NavLink>
        <NavLink
          to={"/signup"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          회원가입{" "}
        </NavLink>
        <NavLink
          to={"/reservation"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          예약{" "}
        </NavLink>
        <NavLink
          to={`/consulting/${makeUUID()}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          상담{" "}
        </NavLink>
        <NavLink
          to={"/mypage"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          나{" "}
        </NavLink>
        <NavLink
          to={"/house"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          매물{" "}
        </NavLink>
      </span>
    </div>
  );
};

export default Header;
