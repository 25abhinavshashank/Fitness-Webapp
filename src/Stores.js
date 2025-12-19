import { configureStore } from "@reduxjs/toolkit";
import fitnessReducer from "./features/fitnessSlice"

const store= configureStore({
    reducer:{
        fitness:fitnessReducer,
    }
})

export default store;