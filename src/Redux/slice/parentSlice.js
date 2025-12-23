import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
}

const parentSlice = createSlice({
    name: "parentsData",
    initialState,
    reducers: {
        fetchParentsRequest(state) {
            state.error = null;
        },
        fetchParentsSuccess(state, action) {
            state.data = action.payload;
        },
        fetchParentsFailure(state, action) {
            state.error = action.payload;
        },
        resetParents(state) {
            state.data = null;
        },
    }

})

export const { fetchParentsRequest, fetchParentsSuccess, fetchParentsFailure, resetParents } = parentSlice.actions;
export default parentSlice.reducer;