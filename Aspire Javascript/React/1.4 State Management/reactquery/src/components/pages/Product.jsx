import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Product = () => {
   const parms = useParams();
   const mutation = useMutation({
    mutationFn: (newdata) => {
      return axios.put(`https://dummyjson.com/products/${parms.id}`, newdata)
    },
    
  })



  const fetchProducts = async ()=>{
            const res = await fetch(`https://dummyjson.com/products/${parms.id}`)
            if(!res.ok){
                throw new Error('Network response was not ok')
            }
            const data = await res.json()
            return data
            
}
  const queryClient = useQueryClient()
  const { data: product, isLoading, error } = useQuery({ queryKey: ['products', parms.id], queryFn: fetchProducts ,staleTime: 10000})
  console.log(product)
  if(isLoading){
    return <div className="text-center">Loading...</div>
  } 
  if(error){
    return <div className="text-center text-red-500">Error: {error.message}</div>
  }

  if(mutation.isPending){
    console.log("loading")
    return <div className="text-center text-red-500">Updating...</div>
  }
  if(mutation.isError){
    return <div className="text-center text-red-500">Error: {mutation.error.message}</div>
  }
  return (
    <>
    <div>product:{product?.title}</div>
    <button
            onClick={() => {
              mutation.mutate({title: 'our new title' })
            }}
          >
            Update Product
          </button>
    </>
    

  )
}
