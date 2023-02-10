import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    realtorNo: null,
    deposit: null,
    rent: null,
    maintenanceFee: null,
    description: null,
    direction: null,
    entrance: null,
    heating: null,
    moveInDate: new Date().toISOString().substring(0, 10),

    houseNo: null,
    isActive: false,
    address: null,
    addressDetail: null,
    bathroom: null,
    completionYear: null,
    exclusivePrivateArea: null,
    supplyArea: null,
    floor: null,
    totalFloor: null,
    purpose: null,
    room: null,
    sido: null,
    dong: null,
    gugun: null,
    zipcode: null,
    regionCode: null,

    airConditioner: false,
    bath: false,
    bathtub: false,
    bed: false,
    bidet: false,
    cctv: false,
    closet: false,
    desk: false,
    diningTable: false,
    dishwasher: false,
    dryingMachine: false,
    elevator: false,
    fireAlarm: false,
    garden: false,
    gasStove: false,
    guard: false,
    inductionCooktop: false,
    intercom: false,
    keycard: false,
    microwave: false,
    oven: false,
    parkingLot: false,
    refrigerator: false,
    shoeRack: false,
    sink: false,
    sofa: false,
    terrace: false,
    veranda: false,
    washingMachine: false,
  },

  reducers: {
    setHouseDate(state, action) {
      state = action.payload;
    },
  },
});

export const houseActions = houseSlice.actions;

export default houseSlice;
