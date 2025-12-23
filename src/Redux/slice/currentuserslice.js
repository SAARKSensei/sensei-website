import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    phoneNumber: "",
    name: "",
    parentId: "",
    orderId: "",
  },
  error: null,
};

const currentUserSlice = createSlice({
  name: "currentUserData",
  initialState,
  reducers: {
    setCurrentUserData(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
    resetCurrentUser(state) {
      state.data = null;
    },
  },
});

export const { setCurrentUserData, resetCurrentUser } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;
