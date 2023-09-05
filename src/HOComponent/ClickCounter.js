// import React, { useState } from 'react';

// const ClickCounter = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Click Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// };

// export default ClickCounter;
import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ClickCounter;

