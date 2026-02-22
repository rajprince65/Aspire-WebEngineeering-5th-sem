import React, { useContext } from 'react'
import { accountContext } from '../context/accountContext'
export const Student = () => {
  const account=useContext(accountContext);
  return (
    <>
      <div className='text-[50px]' style={{backgroundColor:'green',color:'white', width:'100%',textAlign:'center'}}>Student</div>
      <div>{account.username} {account.password}</div>
    </>
  )
}
