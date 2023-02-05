import _axios from "axios";

const axios = _axios.create({
  Headers: {
    "Content-Type": "application/json",
    baseURL: `http://localhost:8080/api`,
  },
});

export default axios;
