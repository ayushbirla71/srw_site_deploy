import React from 'react';
import "./CartItems.css"

const CartItems = () => {
  return (
      <div className="cartitems">
        <div className="cartitems_left">
          <div className="cartitems_left_header">
            <h2>Your Cart</h2>
            <span>(3)</span>
          </div>
          <div className="cartitems_left_box">
            <div className="cartitems_left_box_item">
              <label>
                <img />
              </label>
              <div className="cartitems_left_box_item_info">
                <label>Shipwreck Edibles Gummy</label>

                <div>
                <div className="cartitems_left_box_item_info_qnt">
                  <div className="cartitems_left_box_item_info_qnt_btn">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <label>$13.00</label>
                </div>
                <span>$52.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cartitems_left_last_box">
            <div className="cartitems_left_last_box_item">
              <label>Delivery</label>
              <div className="cartitems_left_last_box_item_info">
                <label>
                  <svg />
                </label>
                <h3>
                  Order by 10pm for free next day delivery on Orders overs $100
                </h3>
                <p>We deliver Monday to Saturday - excluding Holidays</p>
              </div>
            </div>

            <div className="cartitems_left_last_box_item">
              <label>Delivery</label>
              <div className="cartitems_left_last_box_item_info">
                <label></label>
                <h3>
                  Order by 10pm for free next day delivery on Orders overs $100
                </h3>
                <p>We deliver Monday to Saturday - excluding Holidays</p>
              </div>
            </div>

            <div className="cartitems_left_last_box_item">
              <label>Delivery</label>
              <div className="cartitems_left_last_box_item_info">
                <label></label>
                <h3>
                  Order by 10pm for free next day delivery on Orders overs $100
                </h3>
                <p>We deliver Monday to Saturday - excluding Holidays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cartitems_right">
          <div className="cartitems_right_totalprice">
            <div className="cartitems_right_totalprice_item">
              <label>Subtotal</label>
              <span>$497.00</span>
            </div>
            <div  className="cartitems_right_totalprice_item">
              <label>Discount</label>
              <span>$0.0</span>
            </div>
            <div  className="cartitems_right_totalprice_item">
              <label>Shipping Costs</label>
              <span>$50.00</span>
            </div>
          </div>

          <div className="cartitems_right_coupon">
            <input placeholder="Coupon code" />
            <button>Apply Coupon</button>
          </div>

          <div className="cartitems_right_free_shipping">
            <label></label>
            <div className="cartitems_right_free_shipping_progress">
              <label>Get Free <span>Shipping</span> for orders over <span>$100.00</span> </label>
              <a>Continue Shopping</a>
            </div>
          </div>

          <div className="cartitems_right_checkout">
            <label>Checkout</label>
            <span></span>
            <label>$547.00</label>
          </div>

          <div className="cartitems_right_secure_pymt">
            <label>SECURE PAYMENTS PROVIDED BY</label>
            <div  className="cartitems_right_secure_pymt_list">
              <label></label>
              <label></label>
              <label></label>
              <label></label>
            </div>
          </div>

        </div>
      </div>
  )
}

export default CartItems