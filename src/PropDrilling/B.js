import React, { useContext } from 'react'
import { Store } from './A';

function B() {
    const [dataConetxt] = useContext(Store)
    console.log(dataConetxt);
  return (
    <div>
      
    </div>
  )
}

export default B;