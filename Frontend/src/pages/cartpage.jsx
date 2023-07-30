import React from 'react'
import Navbar from '../Components/Navbar'
 import Cart from "../Components/Cart"

const Cartpage = ({auth,propdrill}) => {
  return (
    <div>
      <Navbar isAuth={auth} change= {propdrill}/>
       <Cart/>
    </div>
  )
}

export default Cartpage
