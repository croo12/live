import { useContext } from "react";
import { useMemo } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { userAction } from "../../store/user-slice";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userInfo = useSelector((state) => {
    return state.user.userInfo;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doLogin = async (data) => {
    dispatch(userAction.login(data));
  };

  const doLogout = async () => {
    dispatch(userAction.logout());
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      userInfo,
      doLogin,
      doLogout,
    }),
    [userInfo]
  );

  // console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProtectedRouter = ({ children, condition }) => {
  const { userInfo } = useAuth();

  if (!userInfo?.id) {
    return <Navigate to="/login" />;
  }

  // true => 중개사만 가능
  // false => 유저만 가능

  if (
    (condition === true && userInfo.isRealtor === false) ||
    (condition === false && userInfo.isRealtor === true)
  ) {
    return <Navigate to="/" />;
  }

  return children;
};
