import { useState } from 'react'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>

    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/profile' element={<ProfilePage/>}/>
  </Routes>

    </div>
   </>
  )
}

export default App
