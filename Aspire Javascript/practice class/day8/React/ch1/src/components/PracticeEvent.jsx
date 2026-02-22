import React from 'react'

export const PracticeEvent = () => {
    function handlefun(e){
        alert("button clicked")
    }

    function dispname(name){
        alert("hello "+name)
    }
    function changeFirstname(e){
        console.log("input changed",e.target.value)
    }
   return (
    <>
      <button onClick={handlefun}>Click</button>
      <br/>
      <button onClick={(e)=>(dispname("raj"))}>Disp button</button>
      <br/>
      <input type='text' name="firstname"  placeholder='Enter your name' onChange={changeFirstname}  ></input>
    
    </>
  )
}
