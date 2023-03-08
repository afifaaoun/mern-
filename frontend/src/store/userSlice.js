import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        setusers:(state,action)=>{
            return action.payload
        },
        
    }
})


export const {setusers} = userSlice.actions;
export default userSlice.reducer