import React,{useState} from 'react'
import AnotherCompo from './AnotherCompo'

const SecondCompo = () => {
    const[Counter,setCounter]=useState(0)
  return (
    <div>
      Second Components
      <h1>{Counter}</h1>
      <button onClick={()=>setCounter(Counter+1)}>click me</button>
      <AnotherCompo/>
    </div>
  )
}

export default SecondCompo;
