import { createSlice } from "@reduxjs/toolkit";

// const initialState = 0;

const CounterSlice = createSlice({
    name: "counter",
    initialState:"0",
    reducers: {
        add : ( state,  {payload} ) => state +=payload,
        Sub : ( state,  {payload} ) => state -=payload
      }
})

export const {add, Sub} = CounterSlice.actions
export default CounterSlice.reducer;