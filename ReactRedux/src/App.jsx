import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './CounterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <h2>Welcome React Redux pactise </h2>
    <Counter/>
    </div>
  )
}

export default App
