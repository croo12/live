import axiosInstance, { getAuthHeader } from "../util/axios";

export const getConsultingList = async (situation) => {
  const headers = getAuthHeader();
  let result = null;

  await axiosInstance
    .get("consultings", { params: { situation }, headers })
    .then((res) => {
      console.log(res);

      result = res;
    })
    .catch((err) => console.error(err));

  return result;
};

export const getConsultingDetail = async (consultingNo) => {
  const headers = getAuthHeader();
  let result = null;

  await axiosInstance
    .get(`consultings/${consultingNo}`, { headers })
    .then((res) => {
      console.log(res);
      result = res.data;
    })
    .catch((err) => console.error(err));

  return result;
};

export const registConsultingItems = (consultingNo, data) => {
  const headers = getAuthHeader();

  console.log(consultingNo, data);
  axiosInstance.post(`consultings/${consultingNo}/items`, data, {
    headers,
  });
};
