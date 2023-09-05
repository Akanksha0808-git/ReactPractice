// import React,{useState,useRef} from 'react'

// const UseRefCompo = () => {
//     const refData=useRef(null)
//     const [name,setName]=useState('ea23')
// const resetFunc=()=>{
//     setName('EA24')
//     refData.current.focus();
//     refData.current.style.backgroundColor='red'
// }
//   return (
//     <>
//     <h1>this is useref compo</h1>  
//     <input value={name} onChange={(e)=>setName(e.target.value)}></input>
//     <button onClick={resetFunc}>Reset</button>
//     </>
    
//   )
// }

// export default UseRefCompo
import React, { useRef } from 'react';

function MyComponent() {
  // Create a ref to hold a DOM element
  const myInputRef = useRef(null);

  // Create a ref to hold a value
  // const countRef = useRef(0);

  const handleButtonClick = () => {
    // Access the DOM element using the ref
    myInputRef.current.focus();

    // Access and update the value using the ref
    // countRef.current += 1;
    // console.log('Count:', countRef.current);
  };

  return (
    <div>
      <input ref={myInputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default MyComponent;

