import './App.css';
import Footer from './components/Footer/Footer';
import MainHeader from './components/Header/MainHeader';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './components/pages/SearchPage/SearchPage';
import ProductDetails from './components/pages/Productdetails/ProductDetails';
import CartPopup from './components/PopupBox/CartPopup';
import CartPage from './components/pages/Cart/CartPage';

function App() {
  return (
   <div className='app'>
    <BrowserRouter>
      <MainHeader/>
    <div className='app_home_pages'>
      <div className='app_home_pages_cart_popup'>
      <CartPopup />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='product' element ={<ProductDetails/>}/>
        <Route path='cart' element={<CartPage/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
