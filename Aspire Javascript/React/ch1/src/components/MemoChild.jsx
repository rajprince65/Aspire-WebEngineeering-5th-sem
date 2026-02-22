import React, { memo } from 'react'

export const MemoChild = memo(({title}) => {
  console.log("Child Rendered")
  return (
    <>
     
    <div>MemoChild{title}</div>
    </>
  )
})
