import { createSlice } from "@reduxjs/toolkit";

const initialState={
    spinnerMode:false,
    orders:[]
}

const orderSlice=createSlice({
    name:'order',
    initialState:initialState,
    reducers:{
        isSinding(state){
            state.spinnerMode =true
        },
        finishSending(state){
            state.spinnerMode =false
        },
        fetchOrders(state,action){
            state.orders=action.payload
            state.spinnerMode =false
        }
    }
})

export const orderActions= orderSlice.actions

export default orderSlice