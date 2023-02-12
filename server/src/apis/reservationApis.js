import axiosInstance, { getAuthHeader } from "../util/axios";

export const searchRealtorList = (params) => {
  return axiosInstance.get(`realtors/region`, { params });
};

export const searchReservationRealtorDetail = (realtorNo, params) => {
  return axiosInstance.get(`realtors/${realtorNo}/consultings`, { params });
};

export const registResevation = (data) => {
  return axiosInstance.get(``);
};

export const getReservationList = async (data) => {
  let result = null;
  console.log("데이터 보내줘라")
  await axiosInstance.get(`consultings?situation=${data}`, {
      headers: getAuthHeader(),
    }).then((data)=> {
      result = data.data;
      alert(result);
    });
    return result;
};
