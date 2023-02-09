import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { wishListReducer } from "./wishlistSlice";

export const store =configureStore({
    reducer:{
        wishListReducer
        ,counterReducer

    }
})