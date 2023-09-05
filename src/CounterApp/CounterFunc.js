import React, { useState } from 'react';

const CounterFunc = () => {
  const [count, setCount] = useState(0);

 
  return (
    <div>
     <display value={{count,setCount}}/>
     
    </div>
  );
};

export default CounterFunc;
