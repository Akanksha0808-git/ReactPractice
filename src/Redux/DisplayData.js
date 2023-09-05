import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sub, add } from './CounterSlice';

function DisplayData() {
    const dispatch = useDispatch();
    const {count} = useSelector(state => state)
    function handleAdd(){
        dispatch(add(5))
    }
    function handleSub(){
        dispatch(Sub(1))
    }
  return (
    <>
    <h1>{count}</h1>
     <button onClick={handleAdd}>Increment</button> 
     <button onClick={handleSub}>Decrement</button> 
    </>
  )
}

export default DisplayData