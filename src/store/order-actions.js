import { orderActions } from "./order"
import { cartActions } from "./cart"

export const  sendOrderData=(order)=>{
    return async(dispatch)=>{
        dispatch(orderActions.isSinding())
        const response=await fetch('https://react-restaurant-445f6-default-rtdb.firebaseio.com/orders.json',{
            method:'Post',
            body:JSON.stringify(order)
        })
        if(!response.ok){
            throw new Error('there is something wrong')
        }
        dispatch(orderActions.finishSending())
        dispatch(cartActions.clearCart())
    }
}

export const fetchOrders=()=>{
    return async(dispatch)=>{
        dispatch(orderActions.isSinding())
        const response=await fetch('https://react-restaurant-445f6-default-rtdb.firebaseio.com/orders.json')
        if(!response.ok){
            throw new Error('there is something wrong')
        }
        const data=await response.json()
        dispatch(orderActions.fetchOrders(data))
    }
}