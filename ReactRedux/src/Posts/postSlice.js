
 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data
});
const postSlice = createSlice({
    name: "posts",
    initialState:{
        isLodding:false,
        posts:[],
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending,(state) => {
            state.isLodding = true;
        })
        builder.addCase(fetchPosts.fulfilled , (state , action) => {
            state.isLodding = false,
            state.posts = action.payload,
            state.error = null
        })
        builder.addCase (fetchPosts.rejected , (state , action) => {
            state.isLodding=false,
            state.posts = [],
            state.error = action.error.message

        })
    }
})

export default postSlice.reducer;


