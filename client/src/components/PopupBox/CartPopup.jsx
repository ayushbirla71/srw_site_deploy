import React from "react";
import "./CartPopup.css";
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux';
import { Home_action_btn } from "../../redux/actions/buttons_actions/Buttons_actions";



const CartPopup = () => {

  const Dispatch= useDispatch();
  
  
  const OnHandel = (name)=>{
    console.log(name);
    Dispatch(Home_action_btn(name))
  
  }



  return (
    <div className="cartpopup">
      <label onClick={()=>OnHandel("cart_btn")} >
        <AiOutlineClose />
      </label>
      <div className="cartpopup_header">
        <label>Your Cart</label>
        <span>(0)</span>
      </div>
      <div className="cartpopup_box">
        {/* <div className="cartpopup_box_empty">
          <label>
            <TbShoppingBag />
          </label>
          <button>Show Product</button>
        </div> */}

        <div className="cartpopup_box_items">
          <div className="cartpopup_box_items_list">

            {[1,2,3,,4,4,45].map(()=>(

            <div className="cartpopup_box_items_list_item">
              <div className="cartpopup_box_items_list_item_logo">
                <img />
              </div>
              <div className="cartpopup_box_items_list_item_content">
                <div className="cartpopup_box_items_list_item_content_info">
                  <h4>Shipwreck Edibles Gummy</h4>
                  <div className="cartpopup_box_items_list_item_content_info_qunt">
                    <span>5x</span> <label>$13.00</label>
                  </div>
                </div>
                <div className="cartpopup_box_items_list_item_content_info_price">
                  <label>
                    <AiOutlineClose />
                  </label>
                  <label>$65.00</label>
                </div>
              </div>
            </div>
            ))}

            <div className="cartpopup_box_item_list_price">
              <label>TOTAL</label>
              <span>$305.00</span>
            </div>
          </div>
          <div className="cartpopup_box_items_checkout_btn">
            <button>Checkout</button>
          </div>

         <hr/>

          <div className="cartpopup_box_items_secure_payment_options">
            <h5>SECURE PAYMENTS PROVIDED BY</h5>
            <div className="cartpopup_box_items_secure_payment_options_list">
              <label>
                <span></span>
              </label>
              <label>
                <span></span>
              </label>
              <label>
                <span></span>
              </label>
              <label>
                <span></span>
              </label>
            </div>
          </div>

          <br/>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
