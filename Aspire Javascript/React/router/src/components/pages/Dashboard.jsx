import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const Dashboard = () => {
  const location = useLocation()
  console.log("location state",location.state)
  return (
    <>
      <div>Our Dashboard Page</div>
      <div>location:{location.pathname}</div>
      <div>State:{location.state?.from}</div>
      <Outlet/>
    
    </>
    
  )
}
