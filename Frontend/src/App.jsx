
import { Route,Routes } from 'react-router-dom';

import Signuppage from './pages/signuppage';
import Loginpage from './pages/loginpage';
import Cartpage from './pages/cartpage';
import Homepage from './pages/homepage';
import Productpage from './pages/productpage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/product" element={<Productpage/>} />
      <Route path="/cart" element={<Cartpage/>} />

    </Routes>
  </div>
  );
}

export default App;
