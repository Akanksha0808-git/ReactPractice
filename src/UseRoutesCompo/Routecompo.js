import React from 'react'
import Home from './Home'
import ContactUs from './ContactUs'
import About from './About'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import DynamicComponent from './dynamicCompo';
const Routecompo = () => {
  return (
    <>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li>
              <Link to="/dynamic/123">Dynamic Component</Link>
            </li>
        </ul>
      </nav>
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/aboutus" element={<About/>} />
      <Route path="/dynamic/:id" element={<DynamicComponent/>} />
      
      </Routes>
    </div>
  </>

  )
}

export default Routecompo
