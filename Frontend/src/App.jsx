
// import Navbar from './Components/navbar';
import { Route,Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Product from './Components/Product';
import Home from "./Components/Home"
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />

    </Routes>
  </div>
  );
}

export default App;
