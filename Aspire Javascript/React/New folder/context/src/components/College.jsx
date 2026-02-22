import React,{useState} from 'react'
import { Cordinator } from './Cordinator'
import { accountContext } from '../context/AccountContext'



export const College = () => {
    const [account,setAccount]= useState({username:'nancy',password:'ny123#'})

  return (
    <>   

         <div>College</div>
         <accountContext.Provider value={account}>
            <Cordinator />

         </accountContext.Provider>
        
    
    </>
  )
}
