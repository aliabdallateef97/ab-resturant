import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cart'
import orderSlice from './order'
import authSlice from './auth'

const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        order:orderSlice.reducer,
        auth:authSlice.reducer
    }
})

export default store