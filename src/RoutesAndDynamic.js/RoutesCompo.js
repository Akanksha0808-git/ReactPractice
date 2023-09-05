import React from 'react'
import { Routes,Route } from 'react-router-dom'

import User from './User'
import Students from './Students'
import AboutUs from './AboutUs'
import { Link } from 'react-router-dom'
import DynamicCompo from './DynamicCompo'
const RoutesCompo = () => {
  return (
    <>
    <ul>
      <li><Link to='/Students' >Students</Link></li>
      <li><Link to='/User'>User</Link></li>
      <li><Link to='/AboutUs'>AboutUs</Link></li>

</ul>



    <Routes>
        
        <Route path='/user' element={<User/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/Students/' element={<Students/>}></Route>
        
        <Route path='/Students/:id' element={<DynamicCompo/>}></Route>
        

    </Routes>
    </>
  )
}

export default RoutesCompo
