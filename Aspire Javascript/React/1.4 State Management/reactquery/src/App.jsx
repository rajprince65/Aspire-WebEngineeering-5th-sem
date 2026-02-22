

import {Routes, Route , BrowserRouter} from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Products } from './components/pages/products'
import { Product } from './components/pages/product'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  

  return (
    <>
        <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/products" element={<Products/> }></Route>
                  <Route path="/product" element={<Product/>}></Route>
                  <Route path="/products/:id" element={<Product/>}></Route>
                </Routes>
                

              </BrowserRouter>
              <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    
    </>
 
  )
}

export default App
