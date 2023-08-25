
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../CounterApp/index';
import postSlice from '../Posts/postSlice';
import CounterSlice from '../CounterApp/CounterSlice';

const store = configureStore({
    reducer:{
        counter: CounterSlice,
        posts: postSlice
    }
})

export default store