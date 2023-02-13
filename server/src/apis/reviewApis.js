import axiosInstance, { getAuthHeader } from "../util/axios";

export const getReviewList = async () => {
  return axiosInstance.get(`reviews`, {
    headers: getAuthHeader(),
  });
};
