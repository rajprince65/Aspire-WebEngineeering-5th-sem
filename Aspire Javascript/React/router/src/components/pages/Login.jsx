import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    function handleLogin(){
        navigate('/dashboard', {state:{from:"login"}})

    }
  return (
    <>
    <div>Login</div>
    <button onClick={handleLogin}>Login</button>
    
    </>
  )
}
