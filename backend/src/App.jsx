import { useState, useEffect } from 'react'
import './App.css'
import conf from './conf/conf'
import { login, logout } from './store/authSlice'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { Footer, Header } from './component'

function App() {
  console.log(conf.appwriteurl)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getcurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>

        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App