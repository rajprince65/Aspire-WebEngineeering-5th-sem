import React, { useEffect } from 'react'
import { useState } from 'react'
/**
 * LearnUseEffect component
 * @returns {JSX.Element} A div element with the text "LearnUseEffect"
 */
export const LearnUseEffect = () => {
  const [count,setCount]= useState(0)
  const[randomNumber,setRandomNumber]=useState(0)
  function handleCount(){
    setCount(count+1)
  }

  function resetCount(){
    setCount(0)
  }
  function generateRandomNumber(){
    setRandomNumber(Math.floor(Math.random()*100)+1) 
  }


  useEffect(()=>{
    console.log("use Effect")
    return ()=>{
      console.log("clean up function runs when component unmounts or dependencies change")
    }
  },[count])



  return (
    <>    
          <div>LearnUseEffect</div>
          <div>count:{count}</div>
          <button onClick={handleCount}>Count</button>
          <br/>
          <button onClick={resetCount}>Reset</button>
          <hr/>
          
          <h3>Random number generator</h3>
          <div>Random number:{randomNumber}</div>
          <button onClick={generateRandomNumber}>Generate Random Number</button>
          
    </>

  )
}
