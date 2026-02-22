import React, { use } from 'react'
import { useMemo } from 'react'

export const LearnUseMemo2 = ({num}) => {
    const [count,setCount]=React.useState(0)
    const square=useMemo(()=>{
        return num*num;
    },[num])


    const expensiveCalculation=useMemo(()=>{
        console.log("expensive calculation")
        let sum=0;
        for(let i=0;i<=1000000000;i++){
            sum+=num;
        }
        return sum;
    },[num])


   
  return (
    <>
        <div>Square of number is {square}</div>
        {/* <div>Sum of number is {sum}</div> */}
        <div>expensiveCalculation is {expensiveCalculation}</div>
        <button onClick={(count) => count+1}>Count</button>
        

    </>
    
  )
}
