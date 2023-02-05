import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../../assets/image/liveLogo.png";
import { makeUUID } from "../../util/UUID";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const isToggledHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={classes.header}>
      <div className={classes.headerInner}>
        <div className={classes.item}>
          <NavLink to={"/"} onClick={isToggled && isToggledHandler}>
            <img src={logo} alt="Live Logo" />
          </NavLink>
          <button className={classes.toggleBtn}>
            <GiHamburgerMenu onClick={isToggledHandler} />
          </button>
        </div>
        <ul className={`${classes["menu"]} ${isToggled && classes.active}`}>
          <li>
            <NavLink to={"/house"} onClick={isToggled && isToggledHandler}>
              매물
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/reservation"}
              onClick={isToggled && isToggledHandler}
            >
              예약
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/consulting/${makeUUID()}`}
              onClick={isToggled && isToggledHandler}
            >
              상담
            </NavLink>
          </li>
          <li>
            <NavLink to={"/mypage"} onClick={isToggled && isToggledHandler}>
              마이페이지
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} onClick={isToggled && isToggledHandler}>
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to={"/signup"} onClick={isToggled && isToggledHandler}>
              회원가입
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
