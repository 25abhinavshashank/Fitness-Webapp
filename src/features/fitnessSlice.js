import { createSlice } from "@reduxjs/toolkit";

const initialState={
    bodyParts:[],
    equipment:[],
    muscles:[],

}

const fitnessSlice=createSlice({
    name:"fitness",
    initialState,
    reducers:{
         setBodyParts:(state,action)=>{
            state.bodyParts=action.payload
         },
         setEquipment:(state,action)=>{
            state.equipment=action.payload
         },
         setMuscles:(state,action)=>{
            state.muscles=action.payload
         }
    }
})
export const {setBodyParts,setEquipment,setMuscles}=fitnessSlice.actions
export default fitnessSlice.reducer;