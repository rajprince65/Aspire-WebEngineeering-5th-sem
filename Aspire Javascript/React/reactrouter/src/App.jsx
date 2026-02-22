import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route, Link, Navigate } from 'react-router-dom'
import { LandingPage } from './components/pages/landingPage'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { NavBar } from './components/NavBar'
import { Category } from './components/pages/Category'
import { Dashboard } from './components/pages/Dashboard'
import { Logout } from './components/pages/Logout'
import { SomePage } from './components/pages/SomePage'


function App() {
  const isLogedIN = true; //for testing purpose change it to true or false
  const data={message:'You must be logged in to access dashboard '}
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/logout' element={<Logout />}/>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} >
        <Route path='about' element={<About />} />  //use relative path not absolute path
        <Route index element={<SomePage />} />
        //index share parent path so it will run along with home page
        
      </Route>

      <Route path='/about' element={<About />} />
      <Route path='/category/:categoryname/:id' element={<Category />} />
      <Route path='/dashboard' element={ isLogedIN ? <Dashboard/>:<Navigate to='/' replace state={data}/>} />
 
      <Route path='*' element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
} 
 
export default App
