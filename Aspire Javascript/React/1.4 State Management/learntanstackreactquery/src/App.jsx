import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/home'
import { Products } from './components/pages/products'
import { Product } from './components/pages/product'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/products/:id' element={<Product/>}/>
          </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>

   
   </>
  )
}

export default App
