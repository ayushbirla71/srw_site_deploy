import React, { useEffect } from "react";
import "./CartPopup.css";
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Home_action_btn } from "../../redux/actions/buttons_actions/Buttons_actions";
import { CartItems_actions } from "../../redux/actions/cartItems_actions/CartItems_actions";
import FeachApi from "../../utils/FeachAPI";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { User_login_credentials_act } from "../../redux/actions/user_actions/user_credentials/User_login_credentials";
import {useNavigate} from 'react-router-dom';
const CartPopup = () => {
  const {
    Product_Page,
    User_credentials_login,
    User_details,
    Home_actions,
    Home_product_List,
    CartItems_list,
  } = useSelector((state) => state);
  const navigate = useNavigate();

  const Dispatch = useDispatch();

  const OnHandel = (name) => {
    console.log(name);
    Dispatch(Home_action_btn(name));
  };

  useEffect(() => {

    demo();
  }, []);

  const demo = async () => {
    if (!User_credentials_login.token) {
      let token = await AsyncLocalStorage.getItem("token");
      let userId = await AsyncLocalStorage.getItem("userId");
      // setinput({token:token, userId:userId});

      Dispatch(User_login_credentials_act({ token: token, userId: userId }));

      FeachItemsList(token, userId);
    }
  };

  const FeachItemsList = async (token, userId) => {
    let Obj = {
      url: `users/${userId}/cart/`,
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
      // data: Obj_product_Options,
    };
    try {
      if (token && userId) {
        let data = await FeachApi(Obj);
        if (data?.status === true) {
          Dispatch(CartItems_actions(data.data));
          console.log(data);
        } else {
        }
      }
    } catch (error) {}
  };

  const removItem= async (_id, productId) =>{
    let Obj = {
      url: `users/${User_credentials_login?.userId }/cart/`,
      headers: { Authorization: `Bearer ${User_credentials_login?.token}` },
      method: "put",
      data: {itemId:_id,removeProduct:0, productId:productId},
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
  }

  return (
    <div className="cartpopup">
      <label onClick={() => OnHandel("cart_btn")}>
        <AiOutlineClose />
      </label>
      <div className="cartpopup_header">
        <label>Your Cart</label>
        <span>({CartItems_list ? CartItems_list?.items?.length : 0})</span>
      </div>
      <div className="cartpopup_box">
        <div
          style={CartItems_list?.items?.length >= 1 ? { display: "none" } : {}}
          className="cartpopup_box_empty"
        >
          <label>
            <TbShoppingBag />
          </label>
          <button onClick={()=> OnHandel("cart_btn")}>Show Product</button>
        </div>

        {CartItems_list ? (
          <div
            style={
              CartItems_list?.items?.length <= 0 ? { display: "none" } : {}
            }
            className="cartpopup_box_items"
          >
            <div className="cartpopup_box_items_list">
              {CartItems_list?.items?.map((item, index) => (
                <div key={index} className="cartpopup_box_items_list_item">
                  <div className="cartpopup_box_items_list_item_logo">
                    <img src={item?.productId?.ImageUrlList?.[0]} />
                  </div>
                  <div className="cartpopup_box_items_list_item_content">
                    <div className="cartpopup_box_items_list_item_content_info">
                      <h4>{item ? item.productId.Title : ""}</h4>
                      <div className="cartpopup_box_items_list_item_content_info_qunt">
                        <span> Qty {item?.quantity}</span> *{" "}
                        <label> ₹ {item ? item.productId.Price : ""}</label>
                      </div>
                    </div>
                    <div className="cartpopup_box_items_list_item_content_info_price">
                      <label >
                        <AiOutlineClose onClick={()=>{removItem(item?._id, item?.productId?._id)}}/>
                      </label>
                      <label>
                        ₹ {item ? item.productId.Price * item?.quantity : ""}
                      </label>
                    </div>
                  </div>
                </div>
              ))}

              <div className="cartpopup_box_item_list_price">
                <label>TOTAL</label>
                <span>
                  ₹ {CartItems_list ? CartItems_list?.totalPrice : ""}
                </span>
              </div>
            </div>
            <div className="cartpopup_box_items_checkout_btn">
              <button onClick={()=> (OnHandel("cart_btn"), navigate('/cart'))}>Checkout</button>
            </div>

            <hr />

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

            <br />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartPopup;
