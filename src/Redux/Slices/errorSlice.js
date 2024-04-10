




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    show: false,
    alertType: '',
    alertMsg: ''
}


const slice = createSlice({
    name: 'error',
    initialState,

    reducers: {
        openAlert: (state, action) => {
            state.alertType = action.payload.alertType
            state.alertMsg = action.payload.alertMsg
            state.show = true
        },
        closeAlert: (state, action) => {
            state.alertType = ""
            state.alertMsg = ""
            state.show = false
        }

    },



})

export const { openAlert, closeAlert } = slice.actions
export default slice.reducer;
























