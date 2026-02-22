import React from 'react'
import { Link,NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <> 
      <nav>
        <ul>
            <li><NavLink to="/" style={({isActive})=>{return {backgroundColor:isActive ? "yellow" : ""}}}>Landing</NavLink></li>
            <li><NavLink to="/home" style={({isActive})=>{return {backgroundColor:isActive ? "yellow" : ""}}}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return{backgroundColor: isActive ? "yellow" : "" }}}>About</NavLink></li>
            <li><NavLink to="/category/mobile/1?price=100&&sort=asc" style={({isActive})=>{return{backgroundColor: isActive ? "yellow" : "" }}}>Category</NavLink></li>
            <li><NavLink to= "/dashboard" style={({isActive})=>{return{backgroundColor: isActive ? "yellow" :""} }}>Dashboard</NavLink></li>

            {/* <li><Link to="/">Landing</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
             */}
            
            {/* <li><a href="/">Landing</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li> */}
        </ul>
      </nav>
    </>
  )
}
