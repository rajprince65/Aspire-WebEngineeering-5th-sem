import React from 'react'

export const LearnLiftingStateUp = (props) => {
  const handleClick= (e)=>{
    e.preventDefault()
    const data ="Hello raj"
    props.onpress(data)
  }
  return (
    <>
        <div>learnLiftingStateUp</div>
        <button onClick={handleClick}>ButtonLift</button>
    </>
  )
}
