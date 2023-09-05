import React,{useReducer} from 'react'
const initialValue=0;
const reducer=(state,action)=>{
switch(action){
    case "Increment":
        return state+1;
        case "Decrement":
        return state-1;
        case "Multiplication":
            return state *10;
          default:
            return state;
}
}
const CounterWithReducer = () => {
    const[counter,setCounter]=useReducer(reducer,initialValue)
  return (
    <div>
     CounterWithReducer:{counter} 
     <button onClick={()=>setCounter("Increment")}>Increment!</button>
     <button onClick={()=>setCounter("Decrement")}>Decrement</button>
     <button onClick={()=>setCounter("Multiplication")}>Multiplication</button>


    </div>
  )
}

export default CounterWithReducer
