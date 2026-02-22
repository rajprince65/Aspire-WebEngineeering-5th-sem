import React from 'react'
import {useParams, useSearchParams } from 'react-router-dom'

export const HomePage = () => {
    const {id, product } = useParams()
    const [searchParams] = useSearchParams()
  
    
  return (
    <>
    
    <div>HomePage {product}</div>
    <div>id:{id}</div>
    <div>Search Params {searchParams.get("price")}</div>
    </>
    
  )
}
