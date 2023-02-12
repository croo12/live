import axiosInstance, { getAuthHeader } from "../util/axios";

export const registHouseData = async (data) => {
  const formData = new FormData();

  formData.append(
    "itemRegistRequest",
    new Blob([JSON.stringify(data.jsonData)], { type: "application/json" })
  );

  data.files.forEach((element) => {
    formData.append("files", element);
  });

  const headers = getAuthHeader();

  const sendRequest = async () => {
    const response = await axiosInstance.post("items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...headers,
      },
    });

    return response.data.result;
  };

  try {
    const response = await sendRequest();
    return response;
  } catch (error) {
    alert("등록에 실패했습니다.");
  }
};

export const findHouseByAddress = async (data) => {
  const getData = async () => {
    const response = await axiosInstance.get("/houses", {
      params: {
        address: data.address,
        addressDetail: data.addressDetail,
      },
    });

    return response.data;
  };

  try {
    const response = await getData();
    return response;
  } catch {
    alert("조회에 실패했습니다.");
  }
};

export const getHouseByItemNo = async (data) => {
  const getData = async () => {
    const response = await axiosInstance.get(`/items/${data}`);

    if (response.data.result === "fail") {
      throw new Error(404);
    }

    return response.data;
  };

  try {
    const response = await getData();

    return response;
  } catch {
    // 따로처리안할래~~
  }
};

export const modifyHouseData = async (data) => {
  const formData = new FormData();

  console.log(data.files, data.jsonData.itemImages);

  formData.append(
    "itemUpdateRequest",
    new Blob([JSON.stringify(data.jsonData)], { type: "application/json" })
  );

  console.log(data);

  data.files.forEach((element) => {
    formData.append("files", element);
  });

  const headers = getAuthHeader();

  const sendRequest = async () => {
    // 요청보낼 떄 URI {itemNo} 굳이 넘겨줘야 되나? 필요가 있음?????
    const response = await axiosInstance.put(
      `/items/${data.jsonData.itemNo}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          ...headers,
        },
      }
    );

    console.log(response);

    return response.data.result;
  };

  try {
    const response = await sendRequest();
  } catch (error) {
    alert("수정에 실패했습니다.");
  }
};
