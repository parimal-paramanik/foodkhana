import React from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'


const Navbar = ({isAuth,change}) => {
  const navigate= useNavigate()
  return (
    <div>
         <div className='home'>
      <nav className='navbar'>
        <div className='logo' >
        <img src='https://i.pinimg.com/736x/95/e8/4b/95e84bea1a35588752585f5340ec0a58.jpg' alt='img' 
         onClick={()=>navigate("/")}
        />
        </div>
        

         {

         isAuth ? <div className='container'>
          <button><Link to="/cart">Cart</Link></button>
          <button><Link to="/product">Product</Link></button>
          <button onClick={()=> change(false)}><Link to="/login">Logout</Link></button> 
        </div> :  <div className='container'>
          <button ><Link to="/signup">Signup</Link></button>
          <button><Link to="/login">Login</Link></button>
        </div>

         }
      </nav>
    </div>
      
    </div>
  )
}

export default Navbar
