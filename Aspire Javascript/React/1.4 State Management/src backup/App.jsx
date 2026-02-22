import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Products } from './components/pages/Products'
import { Product } from './components/pages/Product'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/:id' element={<Product/>}></Route>
        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
