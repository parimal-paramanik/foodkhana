import React from 'react'

import Signup from '../Components/Signup'
import Navbar from '../Components/Navbar'
const Signuppage = ({auth,propdrill}) => {
  return (
    <div>
      <Navbar isAuth={auth} change= {propdrill}/>
      <Signup/>
    </div>
  )
}

export default Signuppage
