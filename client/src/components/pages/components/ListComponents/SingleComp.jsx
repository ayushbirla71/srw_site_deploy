import React from 'react';
import logo from "../icons/image 13_prev_ui 1.png";
import {RxDividerVertical} from 'react-icons/rx';
import './SingleComp.css';
import { Link, useNavigate } from 'react-router-dom';

const SingleComp = ({item}) => {
  const navigate= useNavigate()
  return (
    <Link reloadDocument className='singlecomp_list_box_Link' to={`/product/${item._id}`}>
    <div className="singlecomp_list_box">
          <div className="singlecomp_list_box_logo">
            <div className="singlecomp_list_box_logo_img">
              <img src={item?.ImageUrlList[0]} />
            </div>
          </div>
          <div className="singlecomp_list_box_content">
            <div className="singlecomp_list_box_content_header">
              <h4>CONCENTRATES</h4>
              <h3>{item?.Title}</h3>
              <div className="singlecomp_list_box_content_header_review">
                <label>4.6/5 </label>
                <RxDividerVertical />
                <label>
                  135
                  <a> Reviews</a>
                </label>
              </div>
            </div>

            <div className="singlecomp_list_box_content_info">
              <div className="singlecomp_list_box_content_info_price">
                <label className="singlecomp_list_box_content_info_price2_label">
                ₹ {item?.MRP}
                </label>
                <label className="singlecomp_list_box_content_info_price1_label">
                ₹ {item?.Price}
                </label>
              </div>

              {/* <div className="singlecomp_list_box_content_info_options">
                <button>28g</button>
                <button>1/2lb</button>
                <button>1/4lb</button>
              </div> */}
              {/* <div className="singlecomp_list_box_content_info_addcart">

              <button className="singlecomp_list_box_content_info_addcart_btn">
                {" "}
                Add to Cart
              </button>
              </div> */}
            </div>
          </div>
        </div>
    </Link>
  )
}

export default SingleComp;