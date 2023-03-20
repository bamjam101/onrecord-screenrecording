import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    profile: {},
  },
  reducers: {
    setProfile(state, action) {
      const { payload } = action;
      state.address = { ...state.address, ...payload };
    },
    logOut(state) {
      state.address = {};
      state.payment = {};
    },
  },
});

export const { setProfile, logOut } = globalSlice.actions;
export default globalSlice.reducer;
