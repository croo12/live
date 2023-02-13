import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

const reservedItemSlice = createSlice({
  name: `reservedItem`,
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const newArray = [...state.selectedItems, payload];

      const filterArray = newArray.filter((el, idx) => {
        for (let index = 0; index < idx; index++) {
          const element = newArray[index];

          console.log(element.itemNo, el.itemNo);

          if (element.itemNo === el.itemNo) {
            console.log(`똑같네`);
            return false;
          }
        }

        return true;
      });

      console.log(filterArray);
      state.selectedItems = filterArray;
    },
    removeItem(state, { payload }) {
      state.selectedItems = state.selectedItems.filter(
        (el) => el.itemNo !== payload
      );
    },
    clearItem(state) {
      state.selectedItems = [];
    },
  },
});

export const reservedItemAction = reservedItemSlice.actions;

export default reservedItemSlice;
