import React from 'react'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import {Navigate } from 'react-router-dom'
const Productpage = ({auth,propdrill}) => {
  // console.log(auth)
  // const navigate= useNavigate()

  if(!auth){
   
    return <Navigate to={"/"}/> 
  }
  return (

    <div>
      <Navbar isAuth={auth} change= {propdrill}/>
      <Product />
    </div>
  )
}

export default Productpage
