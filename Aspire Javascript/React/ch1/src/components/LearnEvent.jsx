import React from 'react'

export const LearnEvent = () => {
  const handleClick=(e)=>{
    e.preventDefault()
    console.log("Button clcked")

  }
  const handleClick2=(myid)=>{
    
     console.log("my id",myid)
  }
  return (
    <> 
      {/* without argument */}
       <button onClick={handleClick}>Click1</button>
       <button onClick={(e)=>handleClick2("myid")}>Click2</button>
    </>
  )
}
