import _axios from "axios";

const axiosInstance = _axios.create({
  Headers: {
    "Content-Type": "application/json",
  },
  baseURL: `http://localhost:8080/`,
});

export default axiosInstance;
