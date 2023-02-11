import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    houseInfo: null,
  },
  reducers: {
    setHouseInfo(state, action) {
      state.houseInfo = action.payload;
    },
  },
});

export const houseActions = houseSlice.actions;

export default houseSlice;
