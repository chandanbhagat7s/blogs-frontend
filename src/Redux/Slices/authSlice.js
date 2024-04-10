




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loggedin: localStorage.getItem('isLoggedIn') || false,
    data: JSON.parse(localStorage.getItem('data')) || '{abc}'
}




export const LoginIntoAccount = createAsyncThunk('/auth/login', async (data) => {
    try {
        const datares = await axios.post("/api/v1/users/login", data, {
            withCredentials: true,


        });
        console.log("res is ", datares);
        return datares;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})
export const logoutFromAccount = createAsyncThunk('/auth/logout', async (data) => {
    try {
        const datares = await axios.get("/api/v1/user/logout");

        return datares;
    } catch (error) {
        return error.response.data.data;
    }
})




const slice = createSlice({
    name: 'auth',
    initialState,

    reducers: {},
    // we are going to pass extrareducer , this is used to perform updation on the action which is ouside the slice / or thunks okk 
    extraReducers: (builder) => {
        builder.addCase(LoginIntoAccount.fulfilled, (state, action) => {
            console.log(action);
            if (action?.payload?.data?.status) {
                localStorage.setItem('data', JSON.stringify(action?.payload?.data?.user))
                localStorage.setItem('role', action?.payload?.data?.user?.role)
                localStorage.setItem('isLoggedIn', true)
                state.data = action?.payload?.data?.user
                state.loggedin = true;
            }



        })
            .addCase(logoutFromAccount.fulfilled, (state, action) => {
                localStorage.clear()
                state.data = {}
                state.role = ''
                state.loggedin = false
            })


    }


})

// export const {} = slice.actions
export default slice.reducer;
























