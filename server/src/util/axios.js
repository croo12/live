import _axios from "axios";
import store from "../store/store";

export const getAuthHeader = () => {
  const accessToken = store.getState().user.accessToken;
  if (accessToken) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    return headers;
  } else {
    return null;
  }
};

const axiosInstance = _axios.create({
  baseURL: `http://localhost:8080/`,
  "Content-Type": "application/json",
  headers: { timeout: 2000 },
});

axiosInstance.interceptors.response.use(
  (success) => success,
  async (error) => {
    console.log(error);
    const errorCode = error?.code;
    console.log(`너 작동하고 있니?`, errorCode);

    if (errorCode === "ERR_NETWORK") {
      const user = store.getState().user;

      console.log(user);

      const { accessToken, refeshToken, userInfo } = user;
      const isRealtor = userInfo.isRealtor;

      console.log(accessToken, refeshToken);
      const data = { accessToken, refeshToken };

      if (isRealtor === null) return;
      else if (isRealtor === false) {
        console.log(`유저`);
        await axiosInstance
          .post("users/reissue", data)
          .then((result) => {
            console.log(`유저 재발급 됨`, result);
            // window.location.reload();
          })
          .catch((error) => {
            console.log(`유저 재발급 안됨`, error);
          });
      } else {
        console.log(`중개사`);
        await axiosInstance
          .post("realtors/reissue", data)
          .then((result) => {
            console.log(`중개사 재발급 됨`, result);
            // window.location.reload();
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
