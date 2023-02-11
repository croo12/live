import axiosInstance, { getAuthHeader } from "../util/axios";

export const reviewList = async () => {
  return axiosInstance.get("reviews", {
    headers: getAuthHeader(),
  });
};
