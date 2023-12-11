import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h2>Child here</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Child
