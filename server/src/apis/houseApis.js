import axiosInstance from "../util/axios";

export const registHouseData = async (data) => {
  const formData = new FormData();

  data.files.forEach((element) => {
    formData.append("files", element);
  });

  formData.append(
    "itemRegistRequest",
    new Blob(
      [
        JSON.stringify({
          realtorNo: data.realtorNo,
          deposit: data.deposit,
          rent: data.rent,
          maintenanceFee: data.maintenanceFee,
          description: data.description,
          direction: data.direction,
          entrance: data.entrance,
          heating: data.heating,
          moveInDate: data.moveInDate,
          house: {
            houseNo: data.houseNo,
            isActive: data.isActive,
            address: data.address,
            addressDetail: data.addressDetail,
            bathroom: data.bathroom,
            completionYear: data.completionYear,
            exclusivePrivateArea: data.exclusivePrivateArea,
            supplyArea: data.supplyArea,
            floor: data.floor,
            totalFloor: data.totalFloor,
            purpose: data.purpose,
            room: data.room,
            sido: data.sido,
            gugun: data.gugun,
            dong: data.dong,
            zipcode: data.zipcode,
            regionCode: data.regionCode,
          },
          itemOption: {
            airConditioner: data.airConditioner,
            bath: data.bath,
            bathtub: data.bathtub,
            bed: data.bed,
            bidet: data.bidet,
            cctv: data.cctv,
            closet: data.closet,
            desk: data.desk,
            diningTable: data.diningTable,
            dishwasher: data.dishwasher,
            dryingMachine: data.dryingMachine,
            elevator: data.elevator,
            fireAlarm: data.fireAlarm,
            garden: data.garden,
            gasStove: data.gasStove,
            guard: data.guard,
            inductionCooktop: data.inductionCooktop,
            intercom: data.intercom,
            keycard: data.keycard,
            microwave: data.microwave,
            oven: data.oven,
            parkingLot: data.parkingLot,
            refrigerator: data.refrigerator,
            shoeRack: data.shoeRack,
            sink: data.sink,
            sofa: data.sofa,
            terrace: data.terrace,
            veranda: data.veranda,
            washingMachine: data.washingMachine,
          },
        }),
      ],
      { type: "application/json" }
    )
  );

  const sendRequest = async () => {
    const response = await axiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
    console.log(data);
    const response = await axiosInstance.get(`/items/${data}`);

    console.log(response);

    return response.data;
  };

  try {
    const response = await getData();
    console.log(response);
  } catch {}
};
