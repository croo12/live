import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  userInfo: {
    id: null,
    name: "",
    isRealtor: null,
    profile: null,
    score: 0,
  },
  websocket: null,
};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    login(state, { payload }) {
      const { accessToken, refreshToken } = payload;
      console.log(accessToken, refreshToken);
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    logout(state) {
      state.userInfo = {
        id: null,
        name: "",
        isRealtor: null,
        profile: null,
        score: 0,
      };
      state.accessToken = null;
      state.refreshToken = null;
    },
    setInfo(state, { payload }) {
      console.log(payload);
      const newInfo = { ...state.userInfo, ...payload };
      console.log(newInfo);
      state.userInfo = newInfo;
    },
    setIsRealtor(state, { payload }) {
      state.userInfo = { ...state.userInfo, isRealtor: payload };
    },
    connectedWebsocket(state, { payload }) {
      state.websocket = payload;
    },
    disconnectWebsocket(state) {
      state.websocket = null;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
