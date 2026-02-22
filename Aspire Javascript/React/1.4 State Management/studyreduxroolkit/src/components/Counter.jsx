import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,increaseByAmount } from '../features/counter/counterSlice'

export const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <>  
     <div>count:{count}</div>
     <button onClick={()=>dispatch(increment())} >increment</button>
     <br/>
     <button onClick={()=>dispatch(decrement())}>decrement</button>
     {/* <br/>
     <input type="Number" onChange={(e)=>dispatch(increaseByAmount(Number(e.target.value)))}/> */}
     <br/>
     <button onClick={()=>dispatch(increaseByAmount(10))}>IncreaseByAmount</button>
     
    </>
  )
}
