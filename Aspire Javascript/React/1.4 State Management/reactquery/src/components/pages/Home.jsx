import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <>
        <div>Home</div>
        <Link to="/products">Products</Link>
        <br/>
        <Link to="/product">Product</Link>

    </>
  )
}
