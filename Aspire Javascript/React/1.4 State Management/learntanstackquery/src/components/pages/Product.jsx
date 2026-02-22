import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useState } from 'react'


export const Product = () => {
const params = useParams();

  
const fetchProduct = async () => {
                    
                    console.log(params.id)
                
                    const Response = await axios.get(`https://dummyjson.com/products/${params.id}`) 
                     return(Response.data) 
                    


}
  const mutation = useMutation({
    mutationFn: (newData) => {
      return axios.put(`https://dummyjson.com/products/${params.id}`, newData)
    },
  })

  const {data:product,isLoading,error}=useQuery({queryKey:['products',params.id],queryFn:fetchProduct,staleTime:10000})

      if(mutation.isPending) {
        return(<div>Updating...</div>)
    }

    if(mutation.error) {
        return( <div>{mutation.error.message}</div>)
    }
  return (
    <>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
              <div key={product?.id} className="group relative">
                <img
                  alt={product?.imageAlt}
                  src={product?.thumbnail}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/products/${product?.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product?.category}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product?.title}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product?.price}</p>
                </div>
              </div>
          
          </div>
        </div>
      </div>
      <div>
        <button
            onClick={() => {
              mutation.mutate({title: 'We are Aspireans' })
            }}
          >
            Update
        </button>

      </div>
      
    
    </>
  )
}
