
import { Route,Routes } from 'react-router-dom';

import Signuppage from './pages/signuppage';
import Loginpage from './pages/loginpage';
import Cartpage from './pages/cartpage';
import Homepage from './pages/homepage';
import Productpage from './pages/productpage';
import { useState } from 'react';

function App() {
  const [isAuth,setIsAuth] = useState(false);
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage auth={isAuth} propdrill= {setIsAuth}/>} />


      <Route path="/signup" element={<Signuppage auth={isAuth}  propdrill= {setIsAuth}/>} />
      <Route path="/login" element={<Loginpage auth={isAuth}  propdrill= {setIsAuth}/>} />
      <Route path="/product" element={<Productpage auth={isAuth} propdrill= {setIsAuth}/>} />
      <Route path="/cart" element={<Cartpage auth={isAuth} propdrill= {setIsAuth}/>} />

    </Routes>
  </div>
  );
}

export default App;
