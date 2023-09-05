import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LastCompo = () => {
    useEffect(()=>{
  const timer=setInterval(()=>{
            console.log("hello i m timer")
        },2000)

        return ()=>{
            console.log("hello component is unmounted")
            clearInterval(timer)
        }
    },[])
    
  return (
    <div>
    LastCompo:
      <Link to='/about'>Click to go</Link>
    </div>
  )
}

export default LastCompo

