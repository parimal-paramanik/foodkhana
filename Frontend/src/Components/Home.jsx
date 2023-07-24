import React from 'react'
import {Link} from "react-router-dom"

import "../Components/syles/Home.css";
function Home() {
 const  style= { width: "200px", height: "150px" }
  return (
    <>
    <div className='home'>
      {/* <h1>Home</h1> */}
      <nav className='navbar'>
        <div className='logo'>
        <img src='https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg' alt='img'  style={style} />
        </div>
        <div className='container'>
          <button><Link to="/signup">Signup</Link></button>
          <button><Link to="/login">Login</Link></button>
        </div>
      </nav>
    </div>
     {/* <div className='background-img'>
     <img src='https://c4.wallpaperflare.com/wallpaper/501/768/988/fire-food-chilli-peppers-wallpaper-preview.jpg' alt='img'/>
  </div> */}
  </>
  )
}


export default Home
