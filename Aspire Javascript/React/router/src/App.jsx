import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { Dashboard } from './components/pages/Dashboard'
import { NavBar } from './components/pages/NavBar'
import { Settings } from './components/pages/Settings'
import { Profile } from './components/pages/Profile'
import { Login } from './components/pages/Login'
import { NotFoundPage } from './components/pages/NotFoundPage'
import { SomePage } from './components/pages/SomePage'

function App() {
  

  return (
    <BrowserRouter>
  
      <Routes>
        

        <Route path='/' element={<NavBar/>}/>
        <Route path='/homepage/:product/:id' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
        {/* <Route path='/somepage' element={<SomePage/>}></Route> */}
          
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route path="settings" element={<Settings/>}></Route>
            <Route index element={<Profile/>}></Route>

        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
