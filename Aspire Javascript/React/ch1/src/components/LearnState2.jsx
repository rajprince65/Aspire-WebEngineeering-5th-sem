import React from 'react'
import {useState} from 'react'

export const LearnState2 = () => {
  const [isLoggedIn,setIsLoggedIN]=useState(false)
  function handleToggle(){
    setIsLoggedIN(!isLoggedIn)
  }
  return (
    <>
        <div>Learn state with boolean</div>
        <div>{isLoggedIn?"true":"false"}</div>
        <button onClick={handleToggle}>{isLoggedIn?"logout":"login"}</button>
        
    </>
  )
}
