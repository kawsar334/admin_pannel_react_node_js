
import { createSlice } from "@reduxjs/toolkit";

const authSlice  = createSlice({
    name:"user",
    initialState:{
        currrentUser:null,
        loading:false,
        error:false,
    },
    reducers:{
        loginStart:(state, action)=>{
            state.currrentUser = null;
            state.loading = true;
            state.error= false;
        },
        loginSuccess: (state, action) => {
            state.currrentUser= action.payload;
            state.loading= false;
            state.error = false

        },
        loginFailur: (state, action) => {
            state.error= true; 
        },
    }
})


export default  authSlice;
export const { loginStart, loginSuccess, loginFailur } = authSlice.actions
