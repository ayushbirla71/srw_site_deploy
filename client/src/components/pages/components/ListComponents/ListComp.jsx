import React from "react";
import "./ListComp.css";
import logo from "../icons/fa02f6685524d553a14cd27b9d4344ec-removebg-preview.png";
import { RxDividerVertical } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';

const ListComp = ({ type, data }) => {
  const navigate = useNavigate()
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
        {data?.map((item, _id) => {
          
          return(


          <div key={_id} onClick={()=>navigate(`/product/${item._id}`)} className="listcomp_list_box">
            <div className="listcomp_list_box_logo">
              <div className="listcomp_list_box_logo_img">
                <img src={item?.ImageUrlList[0]} />
              </div>
            </div>
            <div className="listcomp_list_box_content">
              <div className="listcomp_list_box_content_header">
                <h4>CONCENTRATES</h4>
                <h3>{item.Title}</h3>
                <div className="listcomp_list_box_content_header_review">
                  <label>4.6/5 </label>
                  <RxDividerVertical />
                  <label>
                    135
                    <a> Reviews</a>
                  </label>
                </div>
                {/* <button>Indica 70%</button> */}
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
{/* 
                <div className="listcomp_list_box_content_info_options">
                  <button>28g</button>
                  <button>1/2lb</button>
                  <button>1/4lb</button>
                </div> */}
             
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListComp;
