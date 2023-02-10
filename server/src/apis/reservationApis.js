import axiosInstance from "../util/axios";
import { authHeader } from "./apiUtils";

export const searchRealtorList = (params) => {
  return axiosInstance.get(`realtors/region`, { params });
};

export const searchReservationRealtorDetail = (realtorNo, params) => {
  return axiosInstance.get(`realtors/${realtorNo}/consultings`, { params });
};

export const registResevation = (data) => {
  return axiosInstance.get(``, { headers: authHeader() });
};