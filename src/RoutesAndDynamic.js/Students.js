import React from 'react'
import { Link } from 'react-router-dom'
const Students = () => {
  return (
    <>
    <ul>
     <Link to='/Students/Akanksha'><li>Akanksha</li></Link>
     <Link to='/Students/Priyanka'><li>Priyanka</li></Link>
     <Link to='/Students/Aloo'><li>Aloo</li></Link>
     <Link to='/Students/Bhoomi'><li>Bhoomi</li></Link>
     </ul>
    </>
  )
}

export default Students
