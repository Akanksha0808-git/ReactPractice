import React from 'react'
import { Link } from 'react-router-dom'
const IDCompo = () => {
  return (
    <div>
      <Link to="/dynamic/1">user1</Link>
      <Link to="/dynamic/2">user2</Link>

      <Link to="/dynamic/3">user3</Link>

      <Link to="/dynamic/4">user4</Link>

    </div>
  )
}

export default IDCompo
