import React, { useContext } from 'react'
import {store} from './DataStore'

const Sample = () => {
   const[contextdata] =useContext(store)
   console.log(contextdata)
  return (
    <div>
      sample
    </div>
  )
}

export default Sample
