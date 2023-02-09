import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

const reservedItemSlice = createSlice({
  name: `reservedItem`,
  initialState,
  reducers: {
    addItem(state, action) {
      state = [...state.selectedItems, action.payload];
    },
    clearItem(state) {
      state = [];
    },
  },
});

export const reservedItemAction = reservedItemSlice.actions;

export default reservedItemSlice;
