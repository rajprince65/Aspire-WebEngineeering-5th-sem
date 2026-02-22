import React from 'react'
import { memo } from 'react'

// export const StudyMemo = memo(({value}) => {
//     console.log("component running")
//   return (
//     <>
//         <div>StudyMemo</div>
        
//         <div>value:{value}</div>
//     </>
    
//   )
// })

export const StudyMemo = memo(({data}) => {
    console.log("component running")
  return (
    <>
        <div>StudyMemo</div>
        
        <div>data:{data.message}</div>
    </>
    
  )
})
