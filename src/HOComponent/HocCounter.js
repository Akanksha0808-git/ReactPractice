import React from 'react'
import { useState } from 'react';

const HocCounter = (WrapprdComponent) => {

  
        const [Counter, setCounter] = useState(0);
        const HandleClick = () => {
    setCounter(Counter + 1);
    }

  return (
    <div>
 <WrapprdComponent counter={Counter} HandleClick={HandleClick}/>
    </div>
  )
}


export default HocCounter
