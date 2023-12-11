import React from 'react'
import Child from './Child'
const Parent = () => {
    const message="hello Parent"
  return (
    <>
     <h1>Parent</h1>
     <Child message={message}/> 
    </>
  )
}

export default Parent
