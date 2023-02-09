import axiosInstance from "../util/axios";

export const userLogin = (data) => {
  return axiosInstance.post(`users/login`, data).then((response)=>{
    if (response.data.data.accessToken) {
      console.log(response.data.data.accessToken);
      console.log(response.data.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("state", "USER");
    }
    return response.data.data.accessToken;
  })
};

export const userLogout = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  localStorage.removeItem("user");
  localStorage.removeItem("state");
  return await axiosInstance.post("users/logout", { accessToken: user.accessToken, refreshToken: user.refreshToken});
};

export const realtorLogin = async (data) => {
  return await axiosInstance.post(`realtors/login`, data).then((response)=>{
    if (response.data.data.accessToken) {
      console.log(response.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("state", "REALTOR");
    }
    return response.data.data.accessToken;
  })
};

export const logout = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const state = localStorage.getItem("state");
  localStorage.removeItem("user");
  localStorage.removeItem("state");
  if(state === "USER") {
    return await axiosInstance.post("users/logout", { accessToken: user.accessToken, refreshToken: user.refreshToken});
  } else{
    return await axiosInstance.post("realtors/logout", { accessToken: user.accessToken, refreshToken: user.refreshToken});
  }
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}