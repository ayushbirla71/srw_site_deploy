import React from "react";
import SinglePopup from "../PopupBox/SinglePopup";
import "./Footer.css";
import logo from './icons/Logo (2).png';
import {RiMastercardFill, RiVisaLine, RiBitCoinLine} from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer_popup"><SinglePopup/></div> */}
      <div className="footer_box">
        <div className="footer_box_header">
          <div className="footer_box_header_left">
            <div className="footer_box_header_left_logo">
              <div className="footer_box_header_left_logo_img"><img src={logo}/></div>
            </div>
            <div className="footer_box_header_left_content">
              <p>
                #1 Canadian top rated online dispensary that meets the customers
                needs in every single medical marijuana aspect. The team here at
                TopShelfBC is heavily involved in the Canadian cannabis industry
                for over 15 years. We strive to provide the top quality
                products, service and care at the lowest prices you’ll ever
                find.
              </p>
            </div>
          </div>

          <div className="footer_box_header_right">
            <div className="footer_box_header_right_quicklink">
              <div className="footer_box_header_right_quicklink_header">
                <h3>QUICK LINK</h3>
              </div>
              <div className="footer_box_header_right_quicklink_box">
                <div className="footer_box_header_right_quicklink_box_left">
                  <a>Track Your Order</a>
                  <a>Shop All</a>
                  <a>Flower</a>
                  <a>Edibles</a>
                  <a>Concentrates</a>
                  <a>Refunds</a>
                </div>
                <div className="footer_box_header_right_quicklink_box_right">
                  <a>Mushrooms</a>
                  <a>Promotions / Bundles</a>
                  <a>Support</a>
                  <a>Reward</a>
                  <a>Blog</a>
                  <a>Shipping Faq</a>
                </div>
              </div>
            </div>

            <div className="footer_box_header_right_contactus">
              <label>CONTACT US</label>
              <div className="footer_box_header_right_contactus_link">

              <a>info@topshelfbc.cc</a>
              </div>
            </div>

            <div className="footer_box_header_right_more">
              <div className="footer_box_header_right_more_header">
                <h3>MORE</h3>
              </div>
              <div className="footer_box_header_right_more_box">
                <div className="footer_box_header_right_more_box_left">
                  <a>Buy weed online in Canada</a>
                  <a>Buy weed online in New Brunswick</a>
                  <a>Buy weed online in Prince Edward Island</a>
                  <a>Buy weed online in Northwest Territories</a>
                  <a>Buy weed online in Saskatchewan</a>
                </div>
                <div className="footer_box_header_right_more_box_right">
                  <a>Buy weed online in Manitoba</a>
                  <a>Buy weed online in Quitebec</a>
                  <a>Buy weed online in British Columbia</a>
                  <a>Buy weed online in Ontario</a>
                  <a>Buy weed online in Alberta</a>
                </div>
              </div>
            </div>

            <div className="footer_box_header_right_cards">
              <label><RiMastercardFill color="red" size={30}/></label>
              <label><RiVisaLine color="blue" size={30}/></label>
              <label><RiBitCoinLine color="yellow" size={30}/></label>
              <label><RiMastercardFill color="red" size={30}/></label>
            </div>
          </div>
        </div>

        <div className="footer_box_footer">
          <div className="footer_box_footer_left">
            <label>© 2022 Top Shelf BC. All Rights Reserved. </label>
          </div>
          <div className="footer_box_footer_right">
            <a>Out Of Stock</a>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
