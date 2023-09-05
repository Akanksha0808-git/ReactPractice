// import React,{useState} from 'react'

// const ClickCounter = () => {
//     const [counter,setCounter]=useState(0);
//     const handleClick=()=>{
//         setCounter(counter+1);
//     }
//       return (
//         <div>ClickCounter:{counter}
//           <button onMouseOver={handleClick}>click me</button>
//         </div>
//       )
//     }

// export default HoverCounter
import React from 'react';
import { useState } from 'react';
const HoverComponent = () => {
  const[count,setCount]=useState(0)
  function handleClick(){
    setCount(count+1)
  }
  return (
    <div>
      <h2>Hover Component</h2>
      <p>Count: {count}</p>
      <button onMouseEnter={handleClick}>
        Click
      </button>
    </div>
  );

  }
export default HoverComponent;

