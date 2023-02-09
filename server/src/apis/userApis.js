import axiosInstance from "../util/axios";
import authHeader from '../util/auth-header';

export const userLoginApi = async (data) => {
  return await axiosInstance.post(`users/login`, data).then((response)=>{
    if (response.data.data.accessToken) {
      console.log(response.data.data.accessToken);
      console.log(response.data.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      const user = JSON.parse(localStorage.getItem('user'));
      alert("user"+user.accessToken);
    }
    return response.data.data.accessToken;
  })
};

export const userLogout = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  alert("user"+user.accessToken);
  return await axiosInstance.post("users/logout", { accessToken: user.accessToken, refreshToken: user.refreshToken});
};