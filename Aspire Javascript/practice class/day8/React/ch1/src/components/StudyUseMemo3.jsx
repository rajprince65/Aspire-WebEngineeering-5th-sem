import React, { useState,useMemo} from 'react'

export const StudyUseMemo3 = () => {
    const [count,setCount]= useState(0)
    const [num,setNum]=useState(5)
    
    const expensiveCalculation= useMemo(
         
        ()=>{
            let sum=0;
            console.log("render")
                for(let i=0;i<1000000000;i++)
                {
                    sum+=num
                }
                return sum;
        },[num]
        
    )
    
    function handlecount(){
        setCount(count+1)
    }

  return (
    <>
        {/* <div>sum is:{sum}</div> */}
        <div>Expensive Calculation:{expensiveCalculation}</div>
        <div>count:{count}</div>
        <button onClick={handlecount}>click</button>


    </>
    
  )
}
