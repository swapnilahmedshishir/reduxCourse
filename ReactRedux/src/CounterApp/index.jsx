import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createStore} from 'redux';
// type 
const INCREMTCOUNTER = 'INCREMTCOUNTER';
const DECREMTCOUNTER = 'DECREMTCOUNTER';
const RESET = "RESET";
// initialvalue
const initialState = {
    count: 0 ,
    name:['swapnil' , "ahmed"]
   }

   // Action
   const incrementCounte = () => {
    return {
       type:INCREMTCOUNTER
    }
  }

  const decrementCounte = () => {
   return {
       type: DECREMTCOUNTER
   }
  }

  const resetCounter = () => {
   return {
       type: RESET
   }
  }

// reducer 

const counterReducer = (state = initialState , action ) => {
    switch (action.type) {
        case INCREMTCOUNTER:
            return {
                count : state.count + 1 
            }
        case RESET:
            return {
                count: 0
            }

        case DECREMTCOUNTER:
            return{
                count: state.count - 1
            }
        
    
        default:
            return state;
    }
}

//store 
export const store = createStore(counterReducer);

// main app
const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

const handleincrement = () => {
       dispatch(incrementCounte())
    }
const handleReset = () => {
        dispatch(resetCounter())
    }
const handleDecerement = () => {
        dispatch(decrementCounte())
    }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleincrement}>increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecerement}>Decerement</button>
    </div>
  )
}

export default Counter


// state -> action -> reducer -> store