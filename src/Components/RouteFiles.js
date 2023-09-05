import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import A from '../UseContext/A'
const routes =()=>{
  return(       
    
    <div>
   <Routes>
   <Route path ='/' element={<Home/>}/> 
   <Route path ='about' element={<AboutUs/>}/>
   </Routes>
   <A/>
    </div>
    ) }
     export default routes;