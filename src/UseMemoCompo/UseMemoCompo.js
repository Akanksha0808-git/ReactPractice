import React,{useState} from 'react'
import { useMemo } from 'react';
const UseMemoCompo = () => {
    const[count,setCount]=useState(0);
    const[rate,setRate]=useState(100);

    function callMemo(){
        console.log('call memo')
    }
     const useMemoFunc = useMemo(()=>{
        console.log('useMemo called......')
     },[count,rate])
  return (
    <>
      <h1>Hello Memo</h1>
      {callMemo()}
      {useMemoFunc}
      <h2>{count}</h2>
      <button onClick={()=> setCount(count +1)}></button>
    </>
  )
}

export default UseMemoCompo
