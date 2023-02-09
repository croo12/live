import axiosInstance from "../util/axios";

export const searchRealtorList = (params) => {
  return axiosInstance.get(`realtors/region`, { params });
};

export const searchReservationRealtorDetail = (realtorNo, params) => {
  return axiosInstance.get(`realtors/${realtorNo}/consultings`, { params });
};
