import React, { useState } from 'react'

export const useCustumeCounter = (initalValue=0) => {
    const [count,setCount]= useState(initalValue)
    function handleCounterIncrement(){
        setCount((prev)=>prev+1 )
    }
    function handleCounterDecrement(){
        setCount((prev)=>prev-1 )
    }
    function handleCounterReset(){
        setCount(initalValue)
    }
  return {
    count,handleCounterIncrement,handleCounterDecrement,handleCounterReset
  }
}
