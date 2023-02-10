import axiosInstance from "../util/axios";

export const userLogin = async (data) => {
  const result = await axiosInstance.post(`users/login`, data)

  const accessToken = result?.data.data.accessToken;
  console.log(accessToken);
  if( accessToken ){
    return getUserInfo(accessToken);
  }else {
    throw new Error(`로그인 실패`);
  }
};

export const userLogout = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  localStorage.removeItem("user");
  localStorage.removeItem("state");
  return await axiosInstance.post("users/logout", { accessToken: user.accessToken, refreshToken: user.refreshToken});
};

//내 정보 줘
export const getUserInfo = (accessToken) => {
  try {
    if (accessToken) {
      return axiosInstance.get("users", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } else {
      return axiosInstance.get("users");
    }
  }catch(err) {
    console.error(`뭐가 잘 안됐다야.`);
  }
}

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
  const user = JSON.parse(localStorage.getItem("user"));
  const state = localStorage.getItem("state");
  localStorage.removeItem("user");
  localStorage.removeItem("state");
  if (state === "USER") {
    return await axiosInstance.post("users/logout", {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    });
  } else {
    return await axiosInstance.post("realtors/logout", {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    });
  }
};