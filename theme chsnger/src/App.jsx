import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themeprovider,ThemeContext, } from './context/theme';
import useTheme from './context/theme';
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

export default function App() {
  const [themeMode,setthememode]=useState('light')
  const lightTheme=()=>{
    setthememode('light')
  }
  const darkTheme=()=>{
    setthememode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <Themeprovider value={{themeMode,lightTheme,darkTheme}}>
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
