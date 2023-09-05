import { configureStore } from "@reduxjs/toolkit";

import ApiSlice from "../features/ApiSlice";
// import counterSlice from "../features/Counter/counterSlice";
// import addtoCart from "../features/addtoCart";

export default configureStore({
reducer:{
   
    Comments:ApiSlice
    // Counter:counterSlice,
    // Cart:addtoCart
 }
})