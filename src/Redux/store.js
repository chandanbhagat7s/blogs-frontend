import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import errorSlice from "./Slices/errorSlice";
import loadSlice from "./Slices/defaultSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        error: errorSlice,
        default: loadSlice
    }
});

export default store;











