import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1,
}
const counterSlice=createSlice({
    name:'counter',
    initialState,

    reducers:{
       increment_value: (state,action)=>{
        
        console.log(action)
        console.log(action.payload)
        // state.value=action.payload+1;
        state.value=state.value+1;
        console.log(state.value)

        
       },
       decrement_value: (state,action)=>{

        console.log(action)
        console.log(action.payload)
        // state.value=action.payload-1;
        state.value=state.value-1;
        console.log(state.value)
       },
    }
    
})

export const {increment_value,decrement_value}= counterSlice.actions
export const counterReducer=counterSlice.reducer