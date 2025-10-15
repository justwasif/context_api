import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>react hai</h1>
      <Login/>
      <Profile/>
      
    </Usercontextprovider>
  )
}

export default App
