import React from 'react'
import { increment,decrement,incrementByAmount } from '../../feature/counter/counterSlice'
import { useDispatch,useSelector } from 'react-redux'
export const Counter = () => {
    const [amount , setAmount] = React.useState(0);
    const dispatch = useDispatch();
    const scount= useSelector((state)=>(state.counter.value))

    function increaseCount() {
        dispatch(increment());
    }
    function decreaseCount(){
        dispatch(decrement());
    }
    function handleAmount(e){
        setAmount(e.target.value);
    }

    function increaseByAmount(){
        dispatch(incrementByAmount(Number(amount)));
    }
  return (
    <>
        <div>counter :{scount} </div>
        <button onClick={increaseCount}>Increment</button>
        <br/>
        <button onClick={decreaseCount}>Decrement</button>
        <br/>
        <input type="number" onChange={handleAmount}/>
        <br/>
        <button onClick={increaseByAmount}>IncreaseByAmount</button>

    </>
  )
}
