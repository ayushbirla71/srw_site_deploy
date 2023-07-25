import React from "react";
import "./CartItems.css";
import { useSelector, useDispatch } from "react-redux";
import FeachApi from "../../../../utils/FeachAPI";
import { CartItems_actions } from "../../../../redux/actions/cartItems_actions/CartItems_actions";


const CartItems = () => {
  const {
    Product_Page,
    User_credentials_login,
    User_details,
    Home_actions,
    Home_product_List,
    CartItems_list,
  } = useSelector((state) => state);
  const Dispatch = useDispatch();

  const addRemovItem = async (_id, productId, removeProduct) => {
    let Obj = {
      url: `users/${User_credentials_login?.userId}/cart/`,
      headers: { Authorization: `Bearer ${User_credentials_login?.token}` },
      method: "put",
      data: { itemId: _id, removeProduct: removeProduct, productId: productId },
    };
    try {
      let data = await FeachApi(Obj);
      if (data?.status === true) {
        console.log(data);
        Dispatch(CartItems_actions(data.data));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems_left">
        <div className="cartitems_left_header">
          <h2>Your Cart</h2>
          <span>
            ({CartItems_list?.items ? CartItems_list?.items?.length : 0})
          </span>
        </div>
        <div className="cartitems_left_box">
          {CartItems_list?.items?.map((item, index) => {
            return (
              <div key={index} className="cartitems_left_box_item">
                <label>
                  <img src={item?.productId?.ImageUrlList?.[0]} />
                </label>
                <div className="cartitems_left_box_item_info">
                  <label>{item ? item.productId.Title : ""}</label>

                  <div>
                    <div className="cartitems_left_box_item_info_qnt">
                      <div className="cartitems_left_box_item_info_qnt_btn">
                        <button
                          onClick={() => {
                            addRemovItem(item?._id, item?.productId?._id, 1);
                          }}
                        >
                          -
                        </button>
                        <span>{item?.quantity}</span>
                        <button
                          onClick={() => {
                            addRemovItem(item?._id, item?.productId?._id, 2);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <label>₹ {item ? item.productId.Price : ""}</label>
                    </div>
                    <span>
                      {" "}
                      ₹ {item ? item.productId.Price * item?.quantity : ""}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cartitems_left_last_box">
          <div className="cartitems_left_last_box_item">
            <label>Delivery</label>
            <div className="cartitems_left_last_box_item_info">
              <label>
                <svg />
              </label>
              <h3>
                Order by 10pm for free next day delivery on Orders overs ₹ 500
              </h3>
              <p>We deliver Monday to Saturday - excluding Holidays</p>
            </div>
          </div>

          <div className="cartitems_left_last_box_item">
            <label>Delivery</label>
            <div className="cartitems_left_last_box_item_info">
              <label></label>
              <h3>
                Order by 10pm for free next day delivery on Orders overs ₹ 500
              </h3>
              <p>We deliver Monday to Saturday - excluding Holidays</p>
            </div>
          </div>

          <div className="cartitems_left_last_box_item">
            <label>Delivery</label>
            <div className="cartitems_left_last_box_item_info">
              <label></label>
              <h3>
                Order by 10pm for free next day delivery on Orders overs ₹ 500
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
            <span>₹ {CartItems_list ? CartItems_list?.totalPrice : 0}</span>
          </div>
          <div className="cartitems_right_totalprice_item">
            <label>Discount</label>
            <span>₹0.0</span>
          </div>
          <div className="cartitems_right_totalprice_item">
            <label>Shipping Costs</label>
            <span>{CartItems_list?.totalPrice>=500 ? "free" :"₹ 50.00 "}</span>
          </div>

          <div className="cartitems_right_totalprice_item">
            <label> Total </label>
            <span>₹ {CartItems_list ? CartItems_list?.totalPrice>=500? CartItems_list?.totalPrice : CartItems_list?.totalPrice + 50 :""}</span>
          </div>
        </div>

        <div className="cartitems_right_coupon">
          <input placeholder="Coupon code" />
          <button>Apply Coupon</button>
        </div>

        <div className="cartitems_right_free_shipping">
          <label></label>
          <div className="cartitems_right_free_shipping_progress">
            <label>
              Get Free <span>Shipping</span> for orders over{" "}
              <span>₹ 500.00</span>{" "}
            </label>
            <a href="/home">  Continue Shopping</a>
          </div>
        </div>

        <div style={{background:"var(--primary-500, #17af26)"}} className="cartitems_right_checkout">
          <label >Checkout</label>
          <span></span>
          <label>₹ {CartItems_list ? CartItems_list?.totalPrice : ""}</label>
        </div>

        <div className="cartitems_right_secure_pymt">
          <label>SECURE PAYMENTS PROVIDED BY</label>
          <div className="cartitems_right_secure_pymt_list">
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

export default CartItems;
