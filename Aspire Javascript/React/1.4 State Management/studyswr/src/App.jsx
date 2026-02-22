import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import useSWR from 'swr'

function App() {

  const fetchUser = async (url) => {
    try{
      const response = await axios.get(url)
      return response.data
    }catch(error){
      throw error
    }

  
  }
  
const {data:users,error,isLoading}=useSWR('https://jsonplaceholder.typicode.com/users',fetchUser,{
  refreshInterval:11000
})
  
if(isLoading){
    return <h2 className='flex justify-center align-center h-screen'>Loading...</h2>
  }
if(error){
    return <h2 className='flex justify-center align-center h-screen'>{error.message}</h2>
  }
  
  // useEffect(() => {
    
  //     fetchUser()

    
  // }, [])

  return (
    <>  
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-400">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {users.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-400">{person.email}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
