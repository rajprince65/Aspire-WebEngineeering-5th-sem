import React from 'react'
import { useCustumeCounter } from '../hooks/useCustumeCounter' 

export const LearnCustumeHook = () => {
    const {count,handleCounterIncrement,
      handleCounterDecrement,handleCounterReset}= useCustumeCounter(10)
  return (
    <>
     <div>LearnCustumeHook</div>
     <div>count:{count}</div>
     <button onClick={handleCounterIncrement}>Increment</button>
     <button onClick={handleCounterDecrement}>Decrement</button>
     <button onClick={handleCounterReset}>Reset</button>
    </>
    
  )
}
