import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MemberManagement from './pages/MemberManagement'
import MemberDetails from './pages/MemberDetails'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/member-management' element={<MemberManagement/>} />
      <Route path='/member-details' element={<MemberDetails/>} />
    </Routes>
    </>
  )
}

export default App
