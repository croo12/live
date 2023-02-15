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
  axiosInstance
    .post(`consultings`, data, { headers })
    .then((res) => {
      console.log("예약 성공", res);
    })
    .catch((err) => {
      console.error("예약하기에서 에러...", err);
    });
};

export const getReservationList = async (data) => {
  let result = null;
  await axiosInstance.get(`consultings?situation=${data}`, {
      headers: getAuthHeader(),
    }).then((data)=> {
      result = data.data;
    });
    return result;
};

export const getTodayReservationList = async () => {
  let result = null;
  await axiosInstance
    .get(`consultings/today`, {
      headers: getAuthHeader(),
    })
    .then((data) => {
      result = data.data;
    });
  return result;
};

export const getReservationDetail = async (data) => {
  let result = null;
  await axiosInstance.get(`consultings/${data}`, {
      headers: getAuthHeader(),
    }).then((data)=> {
      result = data.data;
    });
    return result;
};

export const changeReservationStatus = async (data) => {
  const headers = getAuthHeader();
  let result = null;
  await axiosInstance
    .patch("consultings", {
      consultingNo : data['consultingNo'],
      status : data['status']
    }, { headers : headers })
    .then((res) => {
      console.log("예약 성공", res);
      result = res.data;
    })
    .catch((err) => {
      console.error("예약하기에서 에러...", err);
    });
    return result;
};