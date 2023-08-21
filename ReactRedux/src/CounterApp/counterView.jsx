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
