import React from "react";
import "./Header.css";
import { TbMenu2,TbArrowBadgeDown, TbShoppingBag, TbSearch } from "react-icons/tb";
import logo from "../logo/Logo.png";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <div className="header">
      
      <div className="header_logo">
      <div className="header_menu">
        <TbMenu2/>
        <div>
          
        </div>
      </div>
        <a>
          <img src={logo} />
        </a>
      </div>
      <div className="header_search">
        <input placeholder="Search"/>
        <button><TbSearch/></button>
      </div>

      <div className="header_info">
        <a className="header_info_text">Your Account</a>
        <a>|</a>
        <a><TbShoppingBag/></a>
      </div>
    </div>
  );
};

export default Header;
