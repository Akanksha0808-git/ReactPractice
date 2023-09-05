import React, { createContext, useState } from 'react'
export const store = createContext();


function DataStore(props) {
    const [Data,setData]=useState([1,2,3,4,5,6,7,8,9,10])
  return (
   <store.Provider value={[Data,setData]}>
{props.children}
   </store.Provider>
  )
}

export default DataStore;
