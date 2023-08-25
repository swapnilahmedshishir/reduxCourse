import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounte , decrementCounte,resetCounter} from './CounterSlice';
const CounterView = () => {
  const {count} =  useSelector((state) => state.counter)
  // console.log(count);
  const dispatch = useDispatch()

    return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={()=> dispatch(incrementCounte())}>increment</button>
      <button onClick={()=> dispatch(resetCounter())} >Reset</button>
      <button onClick={()=> dispatch( decrementCounte())}>Decerement</button>
    </div>
  )
}

export default CounterView
