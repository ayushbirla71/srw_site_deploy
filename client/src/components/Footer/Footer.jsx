import React from "react";
import SinglePopup from "../PopupBox/SinglePopup";
import "./Footer.css";
import logo from '../../logos/IMG_20230724_180428-removebg-preview.png';
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
                  <a href="#" >Track Your Order</a>
                  <a href="#" >Shop All</a>
                  <a href="#" >Flower</a>
                  <a href="#" >Edibles</a>
                  <a href="#" >Concentrates</a>
                  <a href="#" >Refunds</a>
                </div>
                <div className="footer_box_header_right_quicklink_box_right">
                  <a href="#" >Mushrooms</a>
                  <a href="#" >Promotions / Bundles</a>
                  <a href="#" >Support</a>
                  <a href="#" >Reward</a>
                  <a href="#" >Blog</a>
                  <a href="#" >Shipping Faq</a>
                </div>
              </div>
            </div>

            <div className="footer_box_header_right_contactus">
              <label>CONTACT US</label>
              <div className="footer_box_header_right_contactus_link">

              <a href="#" >info@topshelfbc.cc</a>
              </div>
            </div>

            <div className="footer_box_header_right_more">
              <div className="footer_box_header_right_more_header">
                <h3>MORE</h3>
              </div>
              <div className="footer_box_header_right_more_box">
                <div className="footer_box_header_right_more_box_left">
                  <a href="#">Buy Laptop & Mobile online in Indore</a>
                  <a href="#">Buy Laptop & Mobile online in Sanawad</a>
                  <a href="#">Buy Laptop & Mobile online in Bediya</a>
                  <a href="#">Buy Laptop & Mobile online in Badwah</a>
                  <a href="#">Buy Laptop & Mobile online in Omkareshwar</a>
                </div>
                <div className="footer_box_header_right_more_box_right">
                  <a href="#" >Buy Laptop & Mobile online in Toklay</a>
                  <a href="#" >Buy Laptop & Mobile online in Satajana</a>
                  <a href="#" >Buy Laptop & Mobile online in Mogava</a>
                  <a href="#" >Buy Laptop & Mobile online in Rahdcot</a>
                  <a href="#" >Buy Laptop & Mobile online in Sala</a>
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
            <a href="#">Out Of Stock</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
