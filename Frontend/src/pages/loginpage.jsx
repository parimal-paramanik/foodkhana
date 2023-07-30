import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'


const Loginpage = ({auth,propdrill}) => {
  return (
    <div>
      <Navbar isAuth={auth} change= {propdrill}/>
      <Login isAuth={auth} change= {propdrill}/>
    </div>
  )
}

export default Loginpage
