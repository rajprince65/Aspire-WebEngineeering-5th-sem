import React ,{useState,memo, useCallback}from 'react'

const Child=memo(({onClick}) => {
    console.log("Child Rendered")
    function handleClick(){
        onClick()
    }
    return(
        <button onClick={handleClick}>Click Me</button>
    )
})

export const UseCallback = () => {
  const [count,setCount]=useState(0)
  return (
    <>
        <div>UseCallback</div>
        <button onClick={()=>setCount(count+1)}>Count: {count} </button>
        <Child onClick={useCallback(()=>console.log("Clicked"), [])}/>
        
    </>
    
  )
}
