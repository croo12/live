import axiosInstance from "../util/axios";
import { getAuthHeader } from "../util/axios";

export const getContractInfoByItemNo = async (data) => {
  const getData = async () => {
    const response = await axiosInstance.get(`/consultings/contracts/${data}`, {
      headers: {
        Authorization: getAuthHeader().Authorization,
        "Content-type": "application/json",
      },
    });

    if (response.data.result === "fail") {
      throw new Error(404);
    }

    return response.data;
  };

  try {
    const response = await getData();

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
