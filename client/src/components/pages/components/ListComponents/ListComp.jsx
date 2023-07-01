import React from "react";
import "./ListComp.css";
import logo from "../icons/image 13_prev_ui 1.png";
import {RxDividerVertical} from 'react-icons/rx';

const ListComp = () => {
  return (
    <div className="listcomp">
      <div className="listcomp_logo">
        <div className="listcomp_logo_img">
          <img src={logo} />
        </div>
        <div className="listcomp_logo_content">
          <h5>Shop our Best Sellers</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
            lorem blandit lectus magnis feugiat.{" "}
          </p>
          <button>View All</button>
        </div>
      </div>

      <div className="listcomp_list">
        {[1,2,3,4,5].map(()=>(

        <div className="listcomp_list_box">
          <div className="listcomp_list_box_logo">
            <div className="listcomp_list_box_logo_img">
              <img src={logo} />
            </div>
          </div>
          <div className="listcomp_list_box_content">
            <div className="listcomp_list_box_content_header">
              <h4>CONCENTRATES</h4>
              <h3>Mix And Match Shatter/Budder 28g (4 X 7G)</h3>
              <div className="listcomp_list_box_content_header_review">
                <label>4.6/5 </label>
                <RxDividerVertical/>
                <label>
                  135
                  <a> Reviews</a>
                </label>
              </div>
              <button>Indica 70%</button>
            </div>

            <div className="listcomp_list_box_content_info">
              <div className="listcomp_list_box_content_info_price">
                <label className="listcomp_list_box_content_info_price1_label">
                  $200.00
                </label>
                <label className="listcomp_list_box_content_info_price2_label">
                  $102.00
                </label>
              </div>

              <div className="listcomp_list_box_content_info_options">
                <button>28g</button>
                <button>1/2lb</button>
                <button>1/4lb</button>
              </div>
              <div className="listcomp_list_box_content_info_addcart">

              <button className="listcomp_list_box_content_info_addcart_btn">
                {" "}
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ListComp;
