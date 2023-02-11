import { userAction } from "../store/user-slice";
import axiosInstance from "../util/axios";
import store from "../store/store";

export const userLogin = async (data, dispatch) => {
  let result = {
    accessToken: null,
    refreshToken: null,
  };

  await axiosInstance
    .post(`users/login`, data, {
      headers: {
        Authorization: null,
      },
    })
    .then(({ data }) => {
      if (data.state === 200) {
        result = data.data;
        console.log(result);
        dispatch(userAction.login(result));
      } else {
        console.log(data);
      }
    })
    .catch((err) => {
      console.error(`로그인 도중`, err);
    });

  return result;
};

export const userLogout = async (dispatch) => {
  const { accessToken, refreshToken } = store.getState().user;
  console.log(accessToken, refreshToken);

  const data = {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };

  await axiosInstance.post("users/logout", data).then((res) => {
    dispatch(userAction.logout());
  });
};

//내 정보 줘
export const getUserInfo = async (accessToken) => {
  let userInfo = null;

  const myAccessToken = store.getState().user.accessToken;
  console.log(myAccessToken);

  if (accessToken) {
    await axiosInstance
      .get("users", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(({ data }) => {
        if (data.state === 200) {
          userInfo = data.data;
        }
      });
  } else {
    console.log(`매개변수 accessToken 이 없습니다. ${accessToken}`);

    await axiosInstance
      .get("users", {
        headers: { Authorization: `Bearer ${myAccessToken}` },
      })
      .then(({ data }) => {
        if (data.state === 200) {
          userInfo = data.data;
        }
      });
  }

  return userInfo;
};

export const realtorLogin = async (data, dispatch) => {
  let result = {
    accessToken: null,
    refreshToken: null,
  };

  await axiosInstance.post(`realtors/login`, data).then(({ data }) => {
    if (data.state === 200) {
      result = { ...result, ...data.data };
      dispatch(userAction.login(result));
    } else {
      console.log(data);
    }
  });

  return result;
};

export const getRealtorInfo = async (accessToken) => {
  let realtorInfo = null;

  const myAccessToken = store.getState().user.accessToken;
  console.log(myAccessToken);

  if (accessToken) {
    await axiosInstance
      .get("realtors", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(({ data }) => {
        if (data.state === 200) {
          realtorInfo = data.data;
        }
      });
  } else {
    console.log(`매개변수 accessToken 이 없습니다. ${accessToken}`);

    await axiosInstance
      .get("realtors", {
        headers: { Authorization: `Bearer ${myAccessToken}` },
      })
      .then(({ data }) => {
        if (data.state === 200) {
          realtorInfo = data.data;
        }
      });
  }

  return realtorInfo;
};

export const realtorLogout = async (dispatch) => {
  const { accessToken, refreshToken } = store.getState().user;
  console.log(accessToken, refreshToken);

  const data = {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };

  await axiosInstance.post("realtors/logout", data).then((res) => {
    dispatch(userAction.logout());
  });
};

// export const logout = async () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const state = localStorage.getItem("state");
//   localStorage.removeItem("user");
//   localStorage.removeItem("state");
//   if (state === "USER") {
//     return await axiosInstance.post("users/logout", {
//       accessToken: user.accessToken,
//       refreshToken: user.refreshToken,
//     });
//   } else {
//     return await axiosInstance.post("realtors/logout", {
//       accessToken: user.accessToken,
//       refreshToken: user.refreshToken,
//     });
//   }
// };