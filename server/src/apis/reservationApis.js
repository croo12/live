import axiosInstance from "../util/axios";

const getHeaders = () => {
  //accessToken header 가져와서 세팅
  const headers = {
    Authorization: "...",
  };

  return headers;
};

export const searchRealtorList = (params) => {
  return axiosInstance.get(`realtors/region`, { params });
};

export const searchReservationRealtorDetail = (realtorNo, params) => {
  return axiosInstance.get(`realtors/${realtorNo}/consultings`, { params });
};

export const registResevation = (data) => {
  return axiosInstance.get(``, { headers: getHeaders() });
};