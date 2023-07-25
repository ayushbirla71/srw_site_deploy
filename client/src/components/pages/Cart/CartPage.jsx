import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { MdShoppingCartCheckout } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import CartCheckout from "./components/CartCheckout";
import CartOrder from "./components/CartOrder";
import CartItems from "./components/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const {
    Product_Page,
    User_credentials_login,
    User_details,
    Home_actions,
    Home_product_List,
    CartItems_list,
  } = useSelector((state) => state);

  const [step, setstep] = useState("Shopping");


  return (
    <div className="cartpage">
      <div className="cartpage_header">
        <div className="cartpage_header_shopping">
          <label style={step == "Shopping" ? { background: "#05422c" } : {}}>
            <TbShoppingBag
              style={step == "Shopping" ? { color: "white" } : {}}
            />
          </label>
          <h3>Shopping Cart</h3>
        </div>
        <div className="cartpage_header_empty">
          <span></span>
        </div>
        <div className="cartpage_header_shopping">
          <label onClick={()=>setstep("Checkout")} style={step == "Checkout" ? { background: "#05422c" } : {}}>
            <MdShoppingCartCheckout
              style={step == "Checkout" ? { color: "white" } : {}}
            />
          </label>
          <h3>Checkout</h3>
        </div>
        <div className="cartpage_header_empty">
          <span></span>
        </div>
        <div className="cartpage_header_shopping">
          <label
            style={step == "Order Complete" ? { background: "#05422c" } : {}}
          >
            <AiOutlineFileDone
              style={step == "Order Complete" ? { color: "white" } : {}}
            />
          </label>
          <h3>Order Complete</h3>
        </div>
      </div>

      <div style={step=="Shopping"?{}:{display:"none"}}>

      <CartItems />
      </div>

      <div style={step=="Checkout"?{}:{display:"none"}}>
      <CartCheckout/>
      </div>

      <div style={step=="Order Complete"?{}:{display:"none"}}>
      <CartOrder/>

      </div>
    </div>
  );
};

export default CartPage;
