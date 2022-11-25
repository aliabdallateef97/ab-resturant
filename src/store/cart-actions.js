import { cartActions } from "./cart"

export const sendCartData=(cart)=>{
    return async()=>{
        const response= await fetch('https://react-restaurant-445f6-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify({
                items:cart.items,
                totalQuantity:cart.totalQuantity,
                totalPrice:cart.totalPrice,
            })
        })
        if(!response.ok){
            throw new Error('there is an error')
        }
    }
}

export const fetchCart=()=>{
    return async(dispatch)=>{
        const response= await fetch ('https://react-restaurant-445f6-default-rtdb.firebaseio.com/cart.json')
        if(!response.ok){
            throw new Error('there is an error')
        }
        const data=await response.json()
        dispatch(cartActions.replaceCart({
            items:data.items === undefined ?[] :data.items,
            totalQuantity:data.totalQuantity,
            totalPrice:data.totalPrice
        }))
    }
}

