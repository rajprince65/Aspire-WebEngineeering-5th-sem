import React from 'react'
import { useState } from 'react'

export const LearnUseState = () => {
    const [name,setName]=useState("gresha")

    function changeFirstname(e){
        setName(e.target.value)

    }

    
    // const [count, setCount] = useState(0)
    // function handleCount(){
    //         setCount((prev)=>prev+1 )
    // }
    // function doReset(){
    //     setCount(0)
    // }
  return (
    <>
        {/* <div>Count: {count}</div> */}
        {/* {console.log("rendering")} */}
        {/* <button onClick={handleCount}>Increment</button>
        <br/>
        <button onClick={doReset}>Reset</button>
        <br/> */}
        <div>name:{name}</div>
        Name:<input type='text' name="firstname"  placeholder='Enter your name' onChange={changeFirstname}></input>
        <div>name:{name}</div>

    </>
  )
}
