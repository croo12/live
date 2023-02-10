import { configureStore } from "@reduxjs/toolkit";
import houseSlice from "./house-slice";
import reservedItemSlice from "./reserved-item-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    house: houseSlice.reducer,
    reserve: reservedItemSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
