import React from 'react'
import {useState} from 'react'

export const LearnState4 = () => {
  const [aar,setArr]= useState([])
  function addData(){
    setArr(prev=>([...prev,"suraj","raj","sunita","mohan","kamal"]))

  }
  return (
    <>
      <div>Learn useState with array</div>
      <button onClick={addData}>Cick</button>
      {
            aar.map((items,index)=>(<div key={index}>{items}</div>))
      }
      

    </>
  )
}
