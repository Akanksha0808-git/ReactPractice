import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseEffectCompo = () => {
  const[count,setCount]=useState(0);
  const[name,setName]=useState('akanksha')
  // console.log('call UseEffect-plus')
  // console.log('call UseEffect-name')

  // console.log(count)
  // console.log(name)
  useEffect(()=>{
console.log('call UseEffect-plus')
  },[count])
  useEffect(()=>{
    console.log('call UseEffect-name')
      },[name])
  return (
    <>
     <button onClick={()=>setCount(count+1)}>plus</button> 
     <h1>{count}</h1>
     <button onClick={()=>setName('Sharma')}>Click</button>
     <h1>{name}</h1>
    </>
  
  )
}

export default UseEffectCompo
