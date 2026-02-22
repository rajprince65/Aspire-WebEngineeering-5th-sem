import React, { useEffect,useState } from 'react'

export const StudyUseEffect = () => {
    const [count,setCount]= useState(0)
    useEffect(()=>{
        console.log('StudyUseEffect mounted');
        return ()=>{
            console.log('StudyUseEffect unmounted');
        }
    },[count])

  return (
    <>
     <div>StudyUseEffect</div>
     <div>Count:{count}</div>
     <button onClick={()=>setCount(count+1)}>Click</button>
    </>
    

  )
}
