import _axios from "axios";

const axiosInstance = _axios.create({
  Headers: {
    "Content-Type": "application/json",
  },
  baseURL:
    process.env.NODE_ENV === "development"
      ? `https://live-live.store:8080/`
      : `https://live-live.store:8080/`,
});

export default axiosInstance;
