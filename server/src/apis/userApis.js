import axiosInstance from "../util/axios";

export const userLoginApi = async (data) => {
  try {
    const result = await axiosInstance.post("users/login", data);
    console.log(result);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
