import React from 'react'
import { memo } from 'react'

export const StudyUseCallback = memo(({ fun }) => {
  console.log("memo  callback rendered")
  return (
    <>
      <div>StudyUseCallback</div>
      <button onClick={fun}>Click Me</button>
    </>
  )
})
