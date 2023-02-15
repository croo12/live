import axiosInstance, { getAuthHeader } from "../util/axios";

export const getReviewList = async () => {
  return axiosInstance.get(`reviews`, {
    headers: getAuthHeader(),
  });
};

export const registReview = async (data) => {
  const postData = async () => {
    const response = await axiosInstance.post("/reviews", data, {
      headers: getAuthHeader(),
    });

    console.log(response);

    return response;
  };

  try {
    postData();
  } catch {}
};
