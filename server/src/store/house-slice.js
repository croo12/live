import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    realtorNo: 0,
    deposit: 0,
    description: "",
    direction: "",
    entrance: "",
    heating: "",
    address: "",
    addressDetail: "",
    bathroom: 0,
    completionYear: 0,
    dong: "",
    exclusivePrivateArea: 0,
    floor: 0,
    gugun: "",
    houseNo: 0,
    purpose: "",
    room: 0,
    sido: "",
    supplyArea: 0,
    totalFloor: 0,
    //zipcode: 0,
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
    maintenanceFee: 0,
    moveInDate: new Date().toISOString().substring(0, 10),
    rent: 0,
    files: [],
    regionCode: "",
  },

  reducers: {
    //     replaceCart(state, action) {
    //       state.items = action.payload.items;
    //       state.totalQuantity = action.payload.totalQuantity;
    //     },
    //     addItemToCart(state, action) {
    //       const newItem = action.payload;
    //       const existingItem = state.items.find((item) => item.id === newItem.id);
    //       state.totalQuantity++;
    //       if (!existingItem) {
    //         state.items.push({
    //           id: newItem.id,
    //           price: newItem.price,
    //           quantity: 1,
    //           totalPrice: newItem.price,
    //           name: newItem.title,
    //         });
    //       } else {
    //         existingItem.quantity++;
    //         existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    //       }
    //     },
    //     removeItemFromCart(state, action) {
    //       const id = action.payload;
    //       const existingItem = state.items.find((item) => item.id === id);
    //       state.totalQuantity--;
    //       if (existingItem.quantity === 1) {
    //         state.items = state.items.filter((item) => item.id !== id);
    //       } else {
    //         existingItem.quantity--;
    //       }
    //     },
  },
});

export const houseActions = houseSlice.actions;

export default houseSlice;
