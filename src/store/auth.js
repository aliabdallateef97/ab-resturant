import {createSlice} from '@reduxjs/toolkit'

const initialState={
    token:localStorage.getItem('token'),
    userId:localStorage.getItem('userId'),
    isLoggedIn:!!localStorage.getItem('token')
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        login(state,action){
            state.token =action.payload.idToken
            state.userId=action.payload.localId
            state.isLoggedIn=true
            localStorage.setItem('token',action.payload.idToken)
            localStorage.setItem('userId',action.payload.localId)
        },

        logout(state){
            state.token=''
            state.userId=''
            state.isLoggedIn=false
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
        }
    }
})

export const authActions=authSlice.actions

export default authSlice