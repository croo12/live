import _axios from "axios";

export const getAuthHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user && user.accessToken) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.accessToken,
    };
  } else {
    return { "Content-Type": "application/json" };
  }
};

const axiosInstance = _axios.create({
  Headers: getAuthHeader(),
  baseURL:
    process.env.NODE_ENV === "development"
      ? `https://live-live.store:8080/`
      : `https://live-live.store:8080/`,
});

export default axiosInstance;