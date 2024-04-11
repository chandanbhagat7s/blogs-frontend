




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    load: false
}







const loadSlice = createSlice({
    name: 'default',
    initialState,

    reducers: {
        loading: (state, action) => {
            state.load = state.load ? false : true
        }
    },



})

export const { loading } = loadSlice.actions
export default loadSlice.reducer;
























