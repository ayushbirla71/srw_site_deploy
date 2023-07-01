import React from "react";
import "./CartOrder.css";

const CartOrder = () => {
  return (
    <div className="cartorder">
      <div className="cartorder_header">
        <h2>Your Order</h2>
        <label>
          <a></a>Paid
        </label>
      </div>
      <div className="cartorder_items">
        <div className="cartorder_items_info">
          <label>
            <img />
          </label>
          <div>
            <h3>Shipwreck Edibles Gummy</h3>
            <div>
              <label>
                <span>4x</span>$13.00
              </label>
              <label>$52.00</label>
            </div>
          </div>
        </div>

        <div className="cartorder_items_total_rs">
          <label>TOTAL</label>
          <span>$497.00</span>
        </div>
      </div>
      <div className="cartorder_address">
        <div className="cartorder_address_left">
          <div className="cartorder_address_left_info">
            <label>Shipping</label>
            <span>New York, US</span>
          </div>
          <div className="cartorder_address_left_info">
            <label>Shipping Options</label>
            <span>Same-Day Dispatching</span>
          </div>
          <div className="cartorder_address_left_info">
            <label>Email Money Transfer</label>
            <span>Interac</span>
          </div>
        </div>
        <div className="cartorder_address_right">
          <div className="cartorder_address_right_info">
            <label>Subtotal</label>
            <span>$497.00</span>
          </div>
          <div className="cartorder_address_right_info">
            <label>Discount</label>
            <span>$0.0</span>
          </div>
          <div className="cartorder_address_right_info">
            <label>Shipping Costs</label>
            <span>$50.00</span>
          </div>
          <div className="cartorder_address_right_info">
            <label>Point</label>
            <span>- $250</span>
          </div>

          <div className="cartorder_address_right_total">
            <label>TOTAL</label>
            <span>$297.00</span>
          </div>
        </div>
      </div>

      <label className="cartorder_label">New Order, Click button bellow</label>

      <div className="cartorder_btn">
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default CartOrder;
