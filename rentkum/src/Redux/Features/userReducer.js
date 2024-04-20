import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk('todos/fetchUser' , async()=>{
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.data)
})




const userSlice = createSlice({
    name: 'todos',
    initialState: {
        loading: false,
        data:[],
        error:''
    },
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending, state=>{
            state.loading=true;
            state.error='';
        })
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading=false
            state.data= action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action)=>{
            state.loading=false
            state.error='fetching todos date'
        })

    }
})

export default userSlice.reducer