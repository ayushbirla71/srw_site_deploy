import React from "react";
import "./CartCheckout.css";

const CartCheckout = () => {
  return (
    <div className="cartcheckout">
      <div className="cartcheckout_left">
        <div className="cartcheckout_left_notification"></div>

        <div className="cartcheckout_left_header">
          <label>Shipping</label>
          <span>(3)</span>
        </div>

        <div className="cartcheckout_left_address">
          <div className="cartcheckout_left_address_name">
            <div>
              <label>First Name *</label>
              <input placeholder="" />
            </div>
            <div>
              <label>Last Name *</label>
              <input placeholder="" />
            </div>
          </div>
          <div className="cartcheckout_left_address_country">
            <label>Country / Region *</label>
            <select></select>
          </div>
          <div className="cartcheckout_left_address_region">
            <label>Country / Region *</label>
            <input placeholder="House number and street name" />
            <input placeholder="Apartment, suite, unit, etc. (optional)" />
          </div>
          <div className="cartcheckout_left_address_city">
            <div>
              <label>Town / City *</label>
              <input />
            </div>
            <div>
              <label>Province *</label>
              <select></select>
            </div>
            <div>
              <label>Postcode / ZIP *</label>
              <input />
            </div>
          </div>

          <div className="cartcheckout_left_address_phone">
            <div>
              <label>Phone (optional)</label>
              <input />
            </div>
            <div>
              <label>Email address *</label>
              <input />
            </div>
          </div>
        </div>

        <div className="cartcheckout_left_diff_address">
          <div className="cartcheckout_left_diff_address_option">
            <div className="cartcheckout_left_diff_address_option_header">
              <input type="checkbox" />
              <label>Ship to a different Address?</label>
            </div>

            <div className="cartcheckout_left_diff_address_option_content"></div>
          </div>

          <div className="cartcheckout_left_diff_address_note">
            <label>Order Notes (optional)</label>
            <textarea placeholder="Notes about your order, e.g. special notes for delivery." />
          </div>
        </div>
      </div>

      <div className="cartcheckout_right">
        <div className="cartcheckout_right_price">
          <div>
            <label>Subtotal</label>
            <span>$497.00</span>
          </div>
          <div>
            <label>Shipping</label>
            <span>New York, US</span>
          </div>
          <div>
            <label>Discount</label>
            <span>$0.0</span>
          </div>
          <div>
            <label>Shipping Costs</label>
            <span>$50.00</span>
          </div>
        </div>
        <div className="cartcheckout_right_money_transfer">
          <label>Email Money Transfer</label>
          <span></span>
        </div>

        <div className="cartcheckout_right_coupon">
          <input type="text" placeholder="Coupon code" />
          <button>Apply Coupon</button>
        </div>
        <div className="cartcheckout_right_checkbox">
          <input type="checkbox" />
          <p>
            I confirm that my address is 100% correct and WILL NOT hold Top
            Shelf BC liable if this shipment is sent to an incorrect address. *
          </p>
        </div>
        <div className="cartcheckout_right_checkbox">
          <input type="checkbox" />
          <p>Sign me up to receive email updates and news (optional)</p>
        </div>
        <div className="cartcheckout_right_switch">
          <label>
            Your point
            <span>10.850</span>
          </label>
          <input type="radio" />
        </div>
        <div className="cartcheckout_right_order_place">
          
            <label>Place Order</label>
            <span></span>
            <label>$547.00</label>
          
        </div>
        <div className="cartcheckout_right_secure_pymnt">
          <label>SECURE PAYMENTS PROVIDED BY</label>
          <div className="cartcheckout_right_secure_pymnt_list">
            <label></label>
            <label></label>
            <label></label>
            <label></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
