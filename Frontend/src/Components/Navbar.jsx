import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <div className='home'>
      <nav className='navbar'>
        <div className='logo' >
        <img src='https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg' alt='img' />
        </div>
        <div className='container'>
          <button><Link to="/signup">Signup</Link></button>
          <button><Link to="/login">Login</Link></button>
        </div>
      </nav>
    </div>
      
    </div>
  )
}

export default Navbar