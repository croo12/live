import axiosInstance, { getAuthHeader } from "../util/axios";

export const getAlertList = async () => {
  const headers = getAuthHeader();
  let result = null;
  await axiosInstance.get("notices", { headers : headers })
    .then((res) => {
      console.log("알람 조회 성공", res);
      result = res.data.data;
    })
    .catch((err) => {
      console.error("알람 조회에서 에러...", err);
    });
    return result;
};
