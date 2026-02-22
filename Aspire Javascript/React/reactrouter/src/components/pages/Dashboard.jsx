import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const navigate = useNavigate();
    const data={logoutmessage:'You have been logged out successfully'};
  return (
    <>
        <div>Dashboard</div>
        <button onClick={()=>(
           navigate("/logout",{state:data}) 
        )}>Logout</button>
    </>
    
  )
}
