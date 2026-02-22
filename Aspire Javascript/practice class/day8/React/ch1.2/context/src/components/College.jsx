import React,{useState} from 'react'
import { Cordinator } from './Cordinator'
import { accountContext } from '../context/accountContext'

export const College = () => {
    const [account ,setAccount] = useState({username:'Suresh',password:'suresh123'});
  return (
    <>
      <div style={{background:'red',color:'white', width:'100%',textAlign:'center'  }}>College</div>
      <accountContext.Provider value={account}>
        <Cordinator/>
      </accountContext.Provider>
    </>
  )
}
