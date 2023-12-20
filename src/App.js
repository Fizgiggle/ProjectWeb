import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path = '/men' element={<ShopCategory category="men"/>}/>
        <Route path = '/women' element={<ShopCategory category="women"/>}/>
        <Route path = '/product' element={<Product/>}>
          <Route path=':productId' element = {<Product/>}/>
        </Route>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSignup/>}/>
        <Route path = '/about' element={<About/>}/>   
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
