import React, { useMemo, useState } from 'react'

function CounterCompo() {
  const[add,setadd]=useState(0)
  const[sub,setsub]=useState(100)
  const  multiplication=useMemo
  
  (function multiplication(){
    console.log("rendering here")
    return add*10;
  },[add])
  return (
    <div>
        <h1>HERE Memo hooks example</h1>
        add;{add}
        <br />
        <button onClick={()=>setadd(add+1)}> add</button>


        <div>
            sub :{sub}
            <br />
            <button onClick={()=>setsub(sub-1)}>sub</button>
        </div>
        <h1>{multiplication}</h1>
      
    </div>
  )
}

export default CounterCompo