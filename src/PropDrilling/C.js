import React, { useContext } from 'react'
import { Store } from './A';

function C() {
   const dataStore = useContext(Store)
   console.log(dataStore.data2);
  return (
    <div>
        
    </div>
  )
}

export default C;