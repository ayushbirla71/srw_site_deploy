import React from "react";
import "./CartPage.css";
import { MdShoppingCartCheckout } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import CartCheckout from "./components/CartCheckout";
import CartOrder from "./components/CartOrder";
import CartItems from "./components/CartItems";

const CartPage = () => {
  return (
    <div className="cartpage">
      <div className="cartpage_header">
        <div className="cartpage_header_shopping">
          <label>
            <TbShoppingBag />
          </label>
          <h3>Shopping Cart</h3>
        </div>
        <div className="cartpage_header_empty">
          <span></span>
        </div>
        <div className="cartpage_header_shopping">
          <label>
            <MdShoppingCartCheckout />
          </label>
          <h3>Checkout</h3>
        </div>
        <div className="cartpage_header_empty">
          <span></span>
        </div>
        <div className="cartpage_header_shopping">
          <label>
            <AiOutlineFileDone />
          </label>
          <h3>Order Complete</h3>
        </div>
      </div>

    <CartItems/>


      {/* <CartCheckout/> */}


      {/* <CartOrder/> */}
    </div>
  );
};

export default CartPage;
