import React from 'react'

export const LearnJSX = () => {
    let x=50
    let name="Lothse"
    const bgPrimary={
      color:"red"
    }
  return (
    <>
        <div>Learn JSX</div>
        <div>Learn In Aspire:{x}</div>
        <div>learn in :{name}</div>
        {/* Attribute in jsx */}
        <div style={bgPrimary}>Learn arrtibute</div>
    </>
  )
}
