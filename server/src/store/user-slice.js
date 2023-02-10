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
      const newUserInfo = { ...state.userInfo, ...action.payload };
      console.log(newUserInfo);
      state.userInfo = newUserInfo;
    },
    logout(state) {
      state.userInfo = {
        id: null,
        accessToken: null,
        name: "",
        refreshToken: null,
        isRealtor: null,
      };
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
