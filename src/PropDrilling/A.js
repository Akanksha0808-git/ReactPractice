import React, { createContext, useState } from 'react'
import B from './B'
import C from './C';
import E from './E';
import D from './D';

export const Store = createContext();
export const Store1 = createContext();

function A() {
    const [data3, setData3] = useState("Hey!! 😊 This is props Driling👍")
    const [data, setData] = useState("Hey!! 😊 This is Context API👍")
    const [data1, setData1] = useState("Hey!! 😊 This is Context API 1👍")
    const [data2, setData2] = useState("Hey!! 😊 This is Context API 2👍")
  return (
    <div>
     <Store.Provider value={[data,data1, data2,data3, setData, setData1, setData2,setData3]} >
        <B />
        <C />
        <E />
     </Store.Provider>
     <Store1.Provider value={{data2}}>
        <D />
     </Store1.Provider>
    </div>
  )
}

export default A
