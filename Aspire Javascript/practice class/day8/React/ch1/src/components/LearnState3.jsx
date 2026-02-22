import React from 'react'
import { useState } from 'react'

export const LearnState3 = () => {
    const [student,setStudent]=useState({name:"suraj",age:20})
    function handleStudent(){
        setStudent({name:"Raj",age:22})
    }
  return (
    <>
       <div>Learn useState with object</div>
       <div>Student Name:{student.name} Age:{student.age}</div>
       <button onClick={handleStudent}>change</button>
    </>
  )
}
