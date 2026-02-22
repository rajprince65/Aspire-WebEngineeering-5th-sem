// import { use, useEffect, useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'


function App() {
  // const [users,setUsers]= useState([])
  //  const [isloading,setIsLoading]= useState(false)
  // const [error,setError]= useState(null)

//   const fetchUser = async ()=>{
//    try{
//      setIsLoading(true)
//      const {data }= await axios.get('https://jsonplaceholder.typicode.com/users')
//      console.log(data)
//      setUsers(data)
     

//    }catch(err){
//       setError(err.message)
//    }finally{
//       setIsLoading(false)
// ``
//    }
//   }
//   useEffect(()=>{
//     fetchUser()
//   },[])
const fetchUser =async(url)=>{
  try{
      const response = await axios.get(url)
      return response.data
    }catch(err){
    // throw new Error(err.message)
      throw err
  }
}

  const {data:users,error,isLoading}=useSWR('https://jsonplaceholder.typicode.com/users',fetchUser,{
    refreshInterval:3000
  })



  if(isLoading){
    return(
      <div className='text-4xl font-bold text-center py-8'>Loading...</div>  
    )
  }

  if(error){
    return(
      <div className='text-4xl font-bold text-center py-8'>Error: {error.message}</div>
    )
  }

  return (
    <div className='bg-gray-200 min-h-screen'>
      
        <div className='text-4xl font-bold text-center py-8'>Learn Swr</div>
        <div className='grid  grid-cols-3 gap-4 border-2 m-2 p-2  width-[50px]'>
        
        { users.map((item,index)=>(
            <div key={index} className='grid grid-rows-3 gap-4 border-2 m-2 p-2 bg-white width-[50px]'>
              <div  className='bg-gray text-lg font-semibold' >{item.name}</div>
              <div  >{item.email}</div>
              <div  >{item.address.street}</div>
            </div>
          ) 
         )
        
        }
      </div>

    </div>
  )
}

export default App
