import React from 'react'
//child component
// export const PracticeProps = (props) => {
//   return (
//     <>
//          <div>Name:{props.name}</div>
//          <div>Roll:{props.roll}</div>
//     </>
//   )
// }


export const PracticeProps = ({name,roll}) => {
  return (
    <>
         <div>Name:{name}</div>
         <div>Roll:{roll}</div>
    </>
  )
}

