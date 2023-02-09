import { configureStore } from "@reduxjs/toolkit";
import houseSlice from "./house-slice";
import reservedItemSlice from "./reserved-item-slice";

const store = configureStore({
  reducer: { house: houseSlice.reducer, reserve: reservedItemSlice.reducer },
});

export default store;
