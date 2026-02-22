import React from 'react'
import { MemoChild } from './MemoChild'
import { useState } from 'react'

export const LearnMemo = () => {
    const [count,setCount]=useState(0)
  return (
    <>

        <button onClick={()=>setCount(count+1)}>Count: {count} </button>
        <div>LearnMemo</div>
        <MemoChild title="First Child"/>



    </>
    
  )
}
