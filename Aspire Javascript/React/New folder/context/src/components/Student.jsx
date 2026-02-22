import React from 'react'
import { useContext } from 'react'
import { accountContext } from '../context/AccountContext'

export const Student = () => {
  const account = useContext(accountContext) 
  return (
    <>
        <div>Student Component</div>
        <h2>Username: {account.username}</h2>
        <h2>Password: {account.password}</h2>

    </>
  )
}
