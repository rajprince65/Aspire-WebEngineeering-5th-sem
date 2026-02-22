import React from 'react'

export const StudyLiftingStateUP = ({onclick}) => {
    const childData="Kathmandu engineering college"
    function handleClick(){
        onclick(childData)
    }
  return (
    <>
    <button onClick={handleClick}>Click</button>

    </>
  )
}
