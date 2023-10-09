import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


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
          <button><Link to="/cart" className="link-text">Cart</Link></button>
          <button><Link to="/product" className="link-text">Product</Link></button>
          <button onClick={()=> change(false)}><Link to="/login" className="link-text">Logout</Link></button> 
        </div> :  <div className='container'>
        <button ><Link to="/signup" className="link-text">Signup</Link></button>
        <button><Link to="/login" className="link-text" >Login</Link></button>

        </div>

         }
      </nav>
    </div>
      
    </div>
  )
}

export default Navbar
