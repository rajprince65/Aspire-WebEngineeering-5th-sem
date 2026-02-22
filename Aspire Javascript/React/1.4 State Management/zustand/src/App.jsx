import { useState } from 'react'

import './App.css'
import { useMyStore } from './zustand/store'
import { NavBar } from './components/pages/NavBar'
import { Info } from './components/pages/info'
// import { Info } from './components/pages/info'
function App() {
  const state = useMyStore()

  return (
    <>
       <NavBar/>
       <Info/>
       
    
    </>
  )
}

export default App
