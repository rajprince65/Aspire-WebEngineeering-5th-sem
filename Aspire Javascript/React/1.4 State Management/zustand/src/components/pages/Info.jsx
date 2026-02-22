import React, { useEffect } from 'react'
import { useMyStore } from '../../zustand/store'

export const Info = () => {
    const myinfo = useMyStore((state)=>(state.myinfo))
    const capitalize = useMyStore((state)=>(state.capitalize))
    
        console.log("child first")

  return (
    <>
        <h1>{myinfo}</h1>
        <button onClick={capitalize}>Capitalize</button>
    </>
  )
}
