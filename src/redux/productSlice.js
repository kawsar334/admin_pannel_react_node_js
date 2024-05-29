


import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{
        product:{},


    },
    reducers:{
        getProducts :(state, action)=>{
            state.product = action.payload

        },
      
    }
})

export const {getProducts, productDetails} = productSlice.actions;
export default productSlice;