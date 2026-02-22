import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        
        <h1>Home</h1>
        
        <Outlet/>
    </div>
  )
}
