import _axios from "axios";

const axios = _axios.create({
  Headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
