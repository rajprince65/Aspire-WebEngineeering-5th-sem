import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <>
    <div>Our NavBar</div>
    <NavLink to="/homepage/mobile/250?price=350" style={{backgroundColor:"red",border:"1px solid black",height:"30px",width:"30px"}}>Home</NavLink>
    <br />
    <Link to="/dashboard" >Dashboard</Link>
    </>
  )
}
