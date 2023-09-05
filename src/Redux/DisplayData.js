import {createSlice } from "@reduxjs/toolkit";
const initialState=0;
const CounterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        add:(state,{payload})=>state+=payload,
        sub:(state,{payload})=>state-=payload

    }
})
export const{add,sub}=CounterSlice.actions
export default CounterSlice.reducer