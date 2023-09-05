import React,{useContext} from 'react'
import {Data} from './A'

 const E=()=>{
    const name=useContext(Data);
    return(
    <div>
       E:-{name} 
    </div>

    )
 }
 export default E
