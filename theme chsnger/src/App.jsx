import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themeprovider,ThemeContext, } from './context/Theme';
import useTheme from './context/Theme';
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

export default function App() {
  const [thememode,setthememode]=useState('light')
  const lightTheme=()=>{
    setthememode('light')
  }
  const darkTheme=()=>{
    setthememode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(thememode)
  },[thememode])


  return (
    <Themeprovider value={{thememode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                       
                    </div>
                </div>
      </div>
    </Themeprovider>

  );
}
