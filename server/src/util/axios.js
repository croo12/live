import _axios from "axios";

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
  const root = JSON.parse(sessionStorage.getItem("persist:root"));
  if (!root.user) {
    return config;
  }

  const user = JSON.parse(root.user);

  if (!user.userInfo) {
    return config;
  }

  const userInfo = user.userInfo;

  if (userInfo.accessToken) {
    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
  }

  return config;
});

export default axiosInstance;