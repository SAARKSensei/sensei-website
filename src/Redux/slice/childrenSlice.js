import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
}

const childrenSlice = createSlice({
    name: "childrenData",
    initialState,
    reducers: {
        fetchChildrenRequest(state) {
            state.error = null;
        },
        fetchChildrenSuccess(state, action) {
            state.data = action.payload;
        },
        fetchChildrenFailure(state, action) {
            state.error = action.payload;
        },
        resetChildren(state) {
            state.data = [];
        },
    }
})

export const { fetchChildrenRequest, fetchChildrenSuccess, fetchChildrenFailure, resetChildren } = childrenSlice.actions;
export default childrenSlice.reducer;