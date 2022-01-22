import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'authentication',
    initialState:{isAuthenticated:false , token:null,userName:null},
    reducers:{
        login(state,action){
            state.isAuthenticated = true
            state.token = action.payload.token
            state.userName = action.payload.name
            
        },
        logout(state){
            state.isAuthenticated = false
            state.token=null
            
        }
    }
})

export const authActions = authSlice.actions
export default authSlice
