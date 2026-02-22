import React,{useState} from 'react'

export const LearnConditionalRendering = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    const status=true
  return (
    <>
      <div>LearnConditionalRendering</div>
      {status &&<div>Aspire college</div>}
      {isLoggedIn ? <>
      <div>Login Success</div>
      <button onClick={()=>setIsLoggedIn(false)}>logout</button>
      </>:
      <>
        <div>Logout Success</div>
        <button onClick={()=>setIsLoggedIn(true)}>login</button>
      </>}
    </>
  )
}
