import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

export const Category = () => {
    const {categoryname,id} = useParams();
    const [searchParams, setSearchParams]= useSearchParams();
  return (
    <>    
        <div>Category: {categoryname}, ID: {id}</div>
        <div>Search Query: {searchParams.get("price")}</div> 
        <div>Search Query: {searchParams.get("sort")}</div> 
     
    </>
  )
}
