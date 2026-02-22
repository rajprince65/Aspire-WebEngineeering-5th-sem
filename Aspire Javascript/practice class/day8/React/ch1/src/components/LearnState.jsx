import React, { use } from 'react'
import { useState } from 'react'

export const LearnState = () => {
   const [count, setCount] = useState(0);
   function handleCount(){
        setCount(count+1) 
    }
   
  return (
    <>
      <h2>Learn State Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleCount}>count</button>

    </>
  )
}
