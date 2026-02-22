import React, { useMemo, useState } from 'react'

export const LearnUseMemo = () => {
    const [count, setCount]= useState(0)
    const [randomNumber, setRandomNumber]= useState(0)
    function handleCount(){
        setCount((prev)=> prev +1)
    }
    function generateRandom(){
        setRandomNumber(Math.floor(Math.random()*100)+1)
    }

    const isCountTen =useMemo(()=>{
        console.log("Checking if count is 10")
        //use expensive calculation here not simple one
        if( count===10){
          return "Yes"
        }else{
          return "No"
        }
    },[count])
    return (
      <>        
          <div>LearnUseMemo</div>
          <div>count:{count} is 10 ?:{isCountTen}</div>
          <button onClick={handleCount}>Count</button>
          <hr />
          <div>Random Number:{randomNumber}</div>
          <button  onClick={generateRandom}>Generate</button>
          
      </>
    )
}
