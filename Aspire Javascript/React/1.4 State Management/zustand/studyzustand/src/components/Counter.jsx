import React from 'react'

import { useMyStore } from '../store/store'
export const Counter = () => {
  const count = useMyStore((state)=>(state.count))
  const increment = useMyStore((state)=>(state.increment))
  const decrement = useMyStore((state)=>(state.decrement))
  return (
    <>
        <div>Count:{count}</div>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>
        

    </>
  )
}

