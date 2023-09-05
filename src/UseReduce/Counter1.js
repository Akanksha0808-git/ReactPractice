import React,{useState} from 'react'

const Counter1 = () => {
    const[counter,setCounter]=useState(0);

  return (
    <div>
      count:
     <h1>{counter}</h1> 
      <button onClick={()=>setCounter(counter+1)}>increse</button>
      <button onClick={()=>setCounter(counter-1)}>decrese</button>

    </div>
  )
}

export default Counter1
