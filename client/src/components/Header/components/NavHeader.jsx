import React from "react";
import "./NavHeader.css";
import {TbArrowBadgeDown} from 'react-icons/tb'

const NavHeader = () => {
  return (
    <div className="naveHeader">
      <div>
        <a>Shop All</a>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Dropdown <TbArrowBadgeDown/> </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <div>
        <a>Edibles</a>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Dropdown <TbArrowBadgeDown/> </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <div>
        <a>Mushrooms</a>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Dropdown <TbArrowBadgeDown/> </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Dropdown <TbArrowBadgeDown/> </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <div>
        <a>Rewards</a>
      </div>

      <div>
        <a>Blog</a>
      </div>


    </div>
  );
};

export default NavHeader;
