import axiosInstance, { getAuthHeader } from "../util/axios";

export const getRequestInfoByItemNo = async (itemNo) => {
  const response = await axiosInstance.get(`/consultings/contracts/${itemNo}`,{
    headers: getAuthHeader()
  })
  return response.data
}

export const getInfoByContractNo = async (contractNo) => {
  const response = await axiosInstance.get(`/contracts/${contractNo}`,{
    headers: getAuthHeader()
  })
  return response.data
}

export const getList = async () => {
  const response = await axiosInstance.get(`/contracts`,{
    headers: getAuthHeader()
  })
  return response.data
}

export const sendRequest = async (data) => {
  const response = await axiosInstance.post(`/contracts`, data, {
    headers: getAuthHeader()
  })
  console.log(response.data)
}

export const update = async (contractNo, data) => {
  const response = await axiosInstance.patch(`/contracts/${contractNo}`, data, {
    headers: getAuthHeader()
  })
  console.log(response.data)
}

export const confirm = async (contractNo) => {
  const response = await axiosInstance.patch(`/contracts/${contractNo}/confirm`, {
    headers: getAuthHeader()
  })
  console.log(response.data)
}

export const complete = async (contractNo) => {
  const response = await axiosInstance.patch(`/contracts/${contractNo}/complete`, {
    headers: getAuthHeader()
  })
  console.log(response.data)
}