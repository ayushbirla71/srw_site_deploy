import React from "react";
import "./NavHeader.css";
import { TbArrowBadgeDown } from "react-icons/tb";
import {useSelector, useDispatch} from 'react-redux';

const NavHeader = () => {
  const navState = useSelector((state)=>state.Home_actions  )

  return (
    <>
      <div className="naveHeader">

      <div>
            <a href="/">Home</a>
          </div>


        <div>
          <a href="search">Shop All</a>
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
          <a href="#">Edibles</a>
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
          <a href="#">Mushrooms</a>
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
          <a href="#">Rewards</a>
        </div>

        <div>
          <a href="#">Blog</a>
        </div>


      </div>

      <div style={navState.menu_btn ?{display:"none"} : {}} className="naveHeader_mobile_menu">
        <div className="naveHeader_mobile_menu_box">

        <div>
            <a href="#">Home</a>
          </div>

          <div>
            <a href="#">Shop All</a>
          </div>

          <div className="naveHeader_mobile_menu_box_dropdown">
            <button className="naveHeader_mobile_menu_box_dropbtn">
              Dropdown <TbArrowBadgeDown />{" "}
            </button>
            <div className="naveHeader_mobile_menu_box_dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div>
            <a href="#">Edibles</a>
          </div>

          <div className="naveHeader_mobile_menu_box_dropdown">
            <button className="naveHeader_mobile_menu_box_dropbtn">
              Dropdown <TbArrowBadgeDown />{" "}
            </button>
            <div className="naveHeader_mobile_menu_box_dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div>
            <a href="#">Mushrooms</a>
          </div>

          <div className="naveHeader_mobile_menu_box_dropdown">
            <button className="naveHeader_mobile_menu_box_dropbtn">
              Dropdown <TbArrowBadgeDown />{" "}
            </button>
            <div className="naveHeader_mobile_menu_box_dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="naveHeader_mobile_menu_box_dropdown">
            <button className="naveHeader_mobile_menu_box_dropbtn">
              Dropdown <TbArrowBadgeDown />{" "}
            </button>
            <div className="naveHeader_mobile_menu_box_dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div>
            <a href="#">Rewards</a>
          </div>

          <div>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
