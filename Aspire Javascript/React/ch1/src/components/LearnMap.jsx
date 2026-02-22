import React from 'react'

export const LearnMap = () => {
  const numbers=[1,9,12,14,20,32,45,63,24,78,90]
  return (
    <>
      <div>Learn Map</div>
      <ul>
        {
            numbers.map((items,index)=>
                <li key={index}>{index}---{items}</li>
            )
        }
        
      
      </ul>
    </>
  )
}
