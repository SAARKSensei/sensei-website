import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
};

const currentChildSlice = createSlice({
  name: "currentChildData",
  initialState,
  reducers: {
    setCurrentChild(state, action) {
      state.data = action.payload;
    },
    removeCurrentChild(state) {
      state.data = [];
    },
  },
});

export const { setCurrentChild, removeCurrentChild } =
  currentChildSlice.actions;
export default currentChildSlice.reducer;
