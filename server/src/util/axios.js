import _axios from "axios";

const axiosInstance = _axios.create({
  Headers: {
    "Content-Type": "application/json",
  },
  baseURL: `https://localhost:8080/`,
});

export default axiosInstance;
