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

    if (response.data.result === "fail") {
      throw new Error(response.data.massage);
    }

    alert(response.data.massage);
  };

  try {
    await sendRequest();
  } catch (error) {
    alert(error);
  }
};

export const findHouseByAddress = async (data) => {
  const getData = async () => {
    const response = axiosInstance.get("/houses", {
      params: {
        address: data.address,
        addressDetail: data.addressDetail,
      },
    });

    console.log(response);
  };

  try {
    getData();
  } catch {}
};
