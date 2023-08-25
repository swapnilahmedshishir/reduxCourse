import {createStore} from 'redux';
import counterView from './counterView';

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

export const counterReducer = (state = initialState , action ) => {
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

// state -> action -> reducer -> store

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const CounterView = () => {
  // main app
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

export default CounterView
