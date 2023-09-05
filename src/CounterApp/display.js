import React from 'react'

const display = (props) => {
    console.log(props)
  return (
    <div>
        <h1></h1>
       <p>Count: {count}</p>
      <button onClick={()=>props.value.setCount(props.value.count +1)}>Increment</button>
      <button onClick={()=>props.value.setCount(props.value.count -1)}>Decrement</button>

    </div>
  )
}

export default display
