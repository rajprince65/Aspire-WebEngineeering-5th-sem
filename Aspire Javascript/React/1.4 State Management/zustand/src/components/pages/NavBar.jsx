import React, { useEffect } from 'react'
import { useMyStore } from '../../zustand/store'



export const NavBar = () => {
//   const state = useMyStore()
  const increment = useMyStore((state)=>(state.increment))
  const decrement = useMyStore((state)=>(state.decrement))
  const count = useMyStore((state)=>(state.count))

    
   console.log("first")
    
  return (
    <>  
        <div>
            <h1>{count}</h1>
            {/* <div>{myinfo}</div> */}
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={decrement}>Descrease</button>
            <br />
            
            {/* <button onClick={capitalize}>Capitalize</button> */}
           
        </div>
    </>
  )
}
