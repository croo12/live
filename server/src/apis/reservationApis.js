import axiosInstance, { getAuthHeader } from "../util/axios";

export const searchRealtorList = (params) => {
  // const result = {};
  const headers = getAuthHeader();

  return axiosInstance.get(`realtors/region`, { params, headers });
};

export const searchReservationRealtorDetail = (realtorNo, params) => {
  const headers = getAuthHeader();
  console.log(params);
  return axiosInstance.get(`realtors/${realtorNo}/consultings`, {
    params,
    headers,
  });
};
/**
 * 
 * @param {"realtorNo" : 1,
    "userNo" : 1,
    "consultingDate" : "2023-02-14T07:51:01",
    "requirement" : "잘 부탁드려용",
    "status" : false,
    "itemList" : [
        1,2
    ]} data 
 */
export const registResevation = (data) => {
  const headers = getAuthHeader();
  return axiosInstance.get(``);
};

export const getReservationList = async (data) => {
  let result = null;
  console.log("데이터 보내줘라")
  await axiosInstance.get(`consultings?situation=${data}`, {
      headers: getAuthHeader(),
    }).then((data)=> {
      result = data.data;
      alert(result);
    });
    return result;
};
