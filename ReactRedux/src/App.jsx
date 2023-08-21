import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  store  from './store/store'
import { Provider } from 'react-redux'
import PostView from './Posts/postView'
import CounterView from './CounterApp/counterView'

function App() {
  
  return (
    <div className='App'>
    <h2>Welcome React Redux pactise </h2>
    <Provider store={store}>
        <CounterView/>
       <PostView/>
    </Provider>
    
    </div>
  )
}

export default App
