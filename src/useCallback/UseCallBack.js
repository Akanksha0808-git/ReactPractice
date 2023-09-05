import React, { useState, useCallback } from 'react';

function UseCallback() {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: re-create the function if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
}
export default UseCallback;
