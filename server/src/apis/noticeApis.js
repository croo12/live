import axiosInstance from "../util/axios";

export const getAlertList = () => {
  return axiosInstance.get("notices");
};
