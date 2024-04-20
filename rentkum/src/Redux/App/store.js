import { configureStore } from "@reduxjs/toolkit";
import userRegister from "../Features/userRegister";

const store = configureStore({
    reducer:{
        user : userRegister
    }
})

export default store;