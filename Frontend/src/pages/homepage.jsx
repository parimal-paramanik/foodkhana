import React from 'react'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'

function Homepage({auth,propdrill}) {
  return (
    <div>
     <Navbar isAuth={auth} change= {propdrill}/>
      <Home/>
    </div>
  )
}

export default Homepage
