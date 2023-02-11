import _axios from "axios";
import store from "../store/store";

export const getAuthHeader = () => {
  const { user } = JSON.parse(sessionStorage.getItem("persist:root"));
  const { userInfo } = JSON.parse(user);
  if (userInfo && userInfo.accessToken) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userInfo.accessToken,
    };
  } else {
    return { "Content-Type": "application/json" };
  }
};

const axiosInstance = _axios.create({
  baseURL: `https://live-live.store:8080/`,
  headers: { "Content-Type": "application/json", timeout: 2000 },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = store.getState().user.accessToken;

  // console.log(accessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (success) => success,
  async (error) => {
    console.log(error);
    const errorCode = error?.response.data;
    console.log(`너 작동하고 있니?`);

    if (errorCode) {
      // const originRequest = error.config;
      console.log(`왔니?`);

      const { accessToken, refeshToken, userInfo } = store.getState().user;
      const isRealtor = userInfo.isRealtor;

      if (isRealtor === null) return;
      else if (isRealtor === false) {
        await axiosInstance
          .post(
            "/users/reissue",
            { accessToken, refeshToken },
            {
              headers: {
                Authorization: null,
              },
            }
          )
          .then((result) => {
            console.log(`유저 재발급 됨`, result);
            window.location.reload();
          })
          .catch((error) => {
            console.log(`유저 재발급 안됨`, error);
          });
      } else {
        await axiosInstance
          .post(
            "/users/reissue",
            { accessToken, refeshToken },
            {
              headers: {
                Authorization: null,
              },
            }
          )
          .then((result) => {
            console.log(`중개사 재발급 됨`, result);
            window.location.reload();
          })
          .catch((error) => {
            console.log(`중개사 재발급 안됨`, error);
          });
      }
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
