import { createSlice } from "@reduxjs/toolkit";

const counterSlice  = createSlice({
    name : 'counter',
    initialState: {count:0},
    reducers : {
        incrementCounte(state , action){            
            state.count = state.count + 1
            
        },
        decrementCounte(state , action){
            state.count = state.count - 1 
        },
        resetCounter(state , action){
            state.count = 0
        }
    }
})

export const { incrementCounte , decrementCounte , resetCounter } = counterSlice.actions
export default counterSlice.reducer;