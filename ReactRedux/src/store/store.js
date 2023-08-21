
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../CounterApp/index';
import postSlice from '../Posts/postSlice';

const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postSlice
    }
})

export default store