import axiosInstance from "../util/axios";
import authHeader from '../util/auth-header';

export const realtorLoginApi = async (data) => {
  return await axiosInstance.post(`realtors/login`, data).then((response)=>{
    if (response.data.data.accessToken) {
      console.log(response.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data.data.accessToken;
  })
};

export const realtorLogout = async (data) => {
  return await axiosInstance.post("realtors/logout", data, { headers: authHeader() }).then((result) => {
      localStorage.removeItem("user");
    return true;
  })
};