import { userAction } from "../store/user-slice";
import axiosInstance, { getAuthHeader } from "../util/axios";
import store from "../store/store";

export const userLogin = async (data, dispatch) => {
  let result = {
    accessToken: null,
    refreshToken: null,
    message: null,
  };

  await axiosInstance
    .post(`users/login`, data, {})
    .then(({ data }) => {
      console.log(data);
      if (data.state === 200) {
        result = data.data;
        dispatch(userAction.login(result));
      } else {
        result["message"] = data.message;
      }
    })
    .catch((err) => {
      console.error(`로그인 도중`, err);
    });

  return result;
};

export const userLogout = async (dispatch) => {
  const headers = getAuthHeader();

  await axiosInstance
    .post("users/logout", undefined, { headers })
    .then((res) => {
      dispatch(userAction.logout());
    });
};

//내 정보 줘
export const getUserInfo = async (accessToken) => {
  let userInfo = null;

  const myAccessToken = store.getState().user.accessToken;

  if (accessToken) {
    await axiosInstance
      .get("users", {
        headers: getAuthHeader(),
      })
      .then((res) => {
        if (res.data.state === 200) {
          userInfo = res.data.data;
          return userInfo;
        }
      });
  } else {
    console.log(`매개변수 accessToken이 없음., ${myAccessToken}`);
    const headers = getAuthHeader();

    await axiosInstance
      .get("users", {
        headers,
      })
      .then((res) => {
        const data = res.data;

        if (data.state === 200) {
          userInfo = data.data;
          return userInfo;
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

  await axiosInstance.post(`realtors/login`, data).then((res) => {
    const data = res.data;
    if (data.state === 200) {
      result = { ...result, ...data.data };
      dispatch(userAction.login(result));
    } else {
      console.log(res);
    }
  });

  return result;
};

export const getRealtorInfo = async (accessToken) => {
  let realtorInfo = null;

  const myAccessToken = store.getState().user.accessToken;

  if (accessToken) {
    console.log(`매개변수 있음 `, accessToken);
    await axiosInstance
      .get("realtors", {
        headers: getAuthHeader(),
      })
      .then((res) => {
        if (res.data.state === 200) {
          realtorInfo = res.data.data;
          return realtorInfo;
        }
      });
  } else {
    console.log(`매개변수 accessToken 이 없습니다. ${accessToken}`);
    const headers = getAuthHeader();

    await axiosInstance
      .get("realtors", {
        headers,
      })
      .then((res) => {
        const data = res.data;

        if (data.state === 200) {
          realtorInfo = data.data;
          return realtorInfo;
        }
      });
  }

  return realtorInfo;
};

export const realtorLogout = async (dispatch) => {
  // const { accessToken, refreshToken } = store.getState().user;
  // console.log(accessToken, refreshToken);

  // const data = {
  //   accessToken: accessToken,
  //   refreshToken: refreshToken,
  // };

  const headers = getAuthHeader();

  await axiosInstance.post("realtors/logout", undefined, { headers }).then((res) => {
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

export const realtorRank = async (orderBy) => {
  let rankInfo = {};
  await axiosInstance.get(`realtors/popular?orderBy=${orderBy}`).then(({ data }) => {
    if (data.state === 200) {
      rankInfo = data.data;
    }
  });
  return rankInfo;
};
