import { useState,useEffect } from 'react'
import './App.css'
import conf from './conf/conf'
import { login,logout } from './store/authSlice'
import authservice from './appwrite/auth'
import {useDispatch} from 'react-redux'

function App() {
  console.log(conf.appwriteurl)
  const [loding,setloding]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authservice.getcurrentuser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setloding(false))
  },[])

  return !loding ?(
    <div className='min-h-screen flex flex-wrap bg-400'>test</div>
  ):null
}

export default App
