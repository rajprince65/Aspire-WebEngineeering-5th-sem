import React, { useState } from 'react'

export const LearnState1 = () => {
  const [name,setName]= useState("")
  return (
    <>
        <div>Learn state wit string</div>
        <input
          type="text"
          value={name} 
          onChange={(e)=>setName(e.target.value)}/>
        <div>Name:{name}</div>
    </>
  )
}
