import React from 'react'

export const Child = ({updateValue}) => {
  const handleParent=(e)=>{
    // updateValue(e.target.value)
     updateValue("sunita")
        
  }
  return (
    <>  
        {/* <input onChange={handleParent}/> */}

        
        <button onClick={handleParent}>click</button>

    </>
  )
}
