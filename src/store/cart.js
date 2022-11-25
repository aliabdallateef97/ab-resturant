import {createSlice} from '@reduxjs/toolkit'

const initialState={
    items:[],
    totalQuantity:0,
    totalPrice:0,
    showCart:false,
    changed:false
}

const cartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        showCart(state){
            state.showCart =!state.showCart
        },

        addItem(state,action){
            const newItem=action.payload
            const existingItem=state.items.find(item => item.id === newItem.id)
            state.totalQuantity=state.totalQuantity + newItem.quantity
            state.totalPrice =state.totalPrice + (newItem.price * newItem.quantity)
            state.changed=true
            if(!existingItem){
                state.items.push(newItem)
            }else{
                existingItem.quantity =existingItem.quantity + newItem.quantity
            }
        },
        removeItem(state,action){
            const id=action.payload
            const existingItem=state.items.find(item=>item.id === id)
            state.totalQuantity=state.totalQuantity-1;
            state.totalPrice =state.totalPrice -existingItem.price
            state.changed=true
            if(existingItem.quantity ===1){
               state.items= state.items.filter(item => item.id !== existingItem.id)
            }else{
                existingItem.quantity=existingItem.quantity-1;
            }
        },
        replaceCart(state,action){
            state.items=action.payload.items
            state.totalPrice=action.payload.totalPrice
            state.totalQuantity=action.payload.totalQuantity
        },
        clearCart(state){
            state.items=[]
            state.totalQuantity=0
            state.totalPrice=0
            state.showCart=false
        }
    }
})

export const cartActions=cartSlice.actions

export default cartSlice