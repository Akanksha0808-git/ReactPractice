import React,{createContext} from 'react'
import E from './E'

const Data= createContext();

 const A=()=>{
    const name='Akanksha'
    return(
    <div>
       A:
       <Data.Provider value={name}>
       <E/>
       </Data.Provider>
    </div>

    )
 }
 export default A
 export {Data}