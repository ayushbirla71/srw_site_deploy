import React from 'react';
import logo from "../icons/image 13_prev_ui 1.png";
import {RxDividerVertical} from 'react-icons/rx';
import './SingleComp.css';

const SingleComp = () => {
  return (
    <div className="singlecomp_list_box" >
          <div className="singlecomp_list_box_logo">
            <div className="singlecomp_list_box_logo_img">
              <img src={logo} />
            </div>
          </div>
          <div className="singlecomp_list_box_content">
            <div className="singlecomp_list_box_content_header">
              <h4>CONCENTRATES</h4>
              <h3>Mix And Match Shatter/Budder 28g (4 X 7G)</h3>
              <div className="singlecomp_list_box_content_header_review">
                <label>4.6/5 </label>
                <RxDividerVertical/>
                <label>
                  135
                  <a> Reviews</a>
                </label>
              </div>
              <button>Indica 70%</button>
            </div>

            <div className="singlecomp_list_box_content_info">
              <div className="singlecomp_list_box_content_info_price">
                <label className="singlecomp_list_box_content_info_price1_label">
                  $200.00
                </label>
                <label className="singlecomp_list_box_content_info_price2_label">
                  $102.00
                </label>
              </div>

              <div className="singlecomp_list_box_content_info_options">
                <button>28g</button>
                <button>1/2lb</button>
                <button>1/4lb</button>
              </div>
              <div className="singlecomp_list_box_content_info_addcart">

              <button className="singlecomp_list_box_content_info_addcart_btn">
                {" "}
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SingleComp;