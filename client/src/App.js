import "./App.css";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import ProductDetails from "./components/pages/Productdetails/ProductDetails";
import CartPopup from "./components/PopupBox/CartPopup";
import CartPage from "./components/pages/Cart/CartPage";
import { useSelector, useDispatch } from "react-redux";
import User_SingUp from "./components/pages/UserDetails/Auth/User_SingUp";
import User_login from "./components/pages/UserDetails/Auth/User_login";
import Email_Verification from "./components/pages/UserDetails/Auth/Email_Verification";
import SetPassword from "./components/pages/UserDetails/Auth/SetPassword";
import ForgetPassword from "./components/pages/UserDetails/Auth/ForgetPassword";
import Order_page from "./components/pages/Order/Order_page";
import UserProfile from "./components/pages/UserDetails/User_Info/UserProfile";
import { useState } from "react";

function App() {
  const { Home_actions } = useSelector((state) => state);

  return (
    <div className="app">
      <BrowserRouter>
        <MainHeader />
        <div className="app_home_pages">
          <div
            style={Home_actions.cart_btn ? { display: "none" } : {}}
            className="app_home_pages_cart_popup"
          >
            <CartPopup />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="search/:title/:category/:OrderFilter"
              element={<SearchPage />}
            />
            <Route path="search/:title" element={<SearchPage />} />
            <Route path="product/:_id" element={<ProductDetails />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="singUp" element={<User_SingUp />} />
            <Route path="login" element={<User_login />} />
            <Route
              path=":type/emailVarification"
              element={<Email_Verification />}
            />
            <Route path=":type/passwordset" element={<SetPassword />} />
            <Route path="user forget password" element={<ForgetPassword />} />
            <Route path="user order" element={<Order_page />} />
            <Route path="user profile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
