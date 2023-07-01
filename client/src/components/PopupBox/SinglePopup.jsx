import React from "react";
import './SinglePopup.css';

const SinglePopup = () => {
  return (
    <div className="singlepopup">
      <div className="singlepopup_box">
        <div className="singlepopup_box_top">
          <h1>UNLOCK 20% OFF YOUR FIRST ORDER</h1>
          <p>Reveal coupon code by entering your email</p>
        </div>
        <hr/>
        <div className="singlepopup_box_bottom">
          <input placeholder="Email Address" />
          <div className="singlepopup_box_bottom_btn">
            <button>Reveal coupon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePopup;
