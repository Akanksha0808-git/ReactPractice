import React ,{useReducer}from 'react'

const counter=(state, action)=>{
switch(action.type){
    case 'Plus':
    return{count:state.count+1};
    case 'Minus':
        return{count:state.count -1};
        default:
            return state;
}
};

const UseReducerHook = () => {
    const[state,dispatch]=useReducer(counter,{count:0});
  return (
    <div>
     <h1>Counter</h1> 
     <p>Count:{state.count}</p>
     <button onClick={()=>dispatch({type: 'Plus'})}>Plus</button>
     <button onClick={()=>dispatch({type: 'Minus'})}>Minus</button>

    </div>
  )
}

export default UseReducerHook;
