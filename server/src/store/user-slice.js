import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    id: null,
    name: "",
    accessToken: null,
    refreshToken: null,
    isRealtor: null,
  },
};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    login(state, action) {
      state = action.payload;
    },
    logout(state) {
      state = {
        id: null,
        accessToken: null,
        name: "",
        isRealtor: null,
      };
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
