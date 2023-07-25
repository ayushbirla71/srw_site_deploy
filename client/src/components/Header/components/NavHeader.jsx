import React, { useEffect, useState } from "react";
import "./NavHeader.css";
import { TbArrowBadgeDown } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { User_details_actn_reset } from "../../../redux/actions/user_actions/user_details/User_details";
import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const { Home_actions, User_details } = useSelector((state) => state);
  const Dispatch = useDispatch();
  const [userMenubtn, setuserMenubtn] = useState({
    btn: "",
  });
  const navigate = useNavigate()

  const OnClick =()=>{
    localStorage.clear();
    Dispatch(User_details_actn_reset());
    window.location.reload();
    navigate("/home");
    
    
  }

  return (
    <>
      <div className="naveHeader">
        <div>
          <a href="/home">Home</a>
        </div>

        <div>
          <a href="search">Shop All</a>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Dropdown <TbArrowBadgeDown />{" "}
          </button>
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
          <button className="dropbtn">
            Dropdown <TbArrowBadgeDown />{" "}
          </button>
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
          <button className="dropbtn">
            Dropdown <TbArrowBadgeDown />{" "}
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Dropdown <TbArrowBadgeDown />{" "}
          </button>
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

      <div
        style={Home_actions.menu_btn ? { display: "none" } : {}}
        className="naveHeader_mobile_menu"
      >
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

      <div
        className="naveHeader_info_login_user_menu"
        style={Home_actions.user_menu_btn ? { display: "none" } : {}}
      >
        {User_details ? (
          <div className="naveHeader_info_login_user_menu_userInfo">
            <div className="naveHeader_info_login_user_menu_userInfo_dropdown">
              <button
                onClick={() => setuserMenubtn({ btn: "Account" })}
                className="naveHeader_info_login_user_menu_userInfo_dropbtn"
              >
                Account{" "}
              </button>
              <div
                style={
                  userMenubtn.btn === "Account" ? { display: "block" } : {}
                }
                className="naveHeader_info_login_user_menu_userInfo_dropdown-content"
              >
                <a href="/user profile">Profile</a>
                <a href="#">Setting</a>
                <a href="#">Privecy</a>
              </div>
            </div>

            <div className="naveHeader_info_login_user_menu_userInfo_link_div">
              <a
                className="naveHeader_info_login_user_menu_userInfo_link_div_content"
                href="/cart"
              >
                Cart
              </a>
            </div>

            <div className="naveHeader_info_login_user_menu_userInfo_link_div">
              <a
                className="naveHeader_info_login_user_menu_userInfo_link_div_content"
                href="/user order"
              >
                Order
              </a>
            </div>

            <div className="naveHeader_info_login_user_menu_userInfo_link_div">
              <a
                className="naveHeader_info_login_user_menu_userInfo_link_div_content"
                onClick={OnClick}
              >
                LogOut
              </a>
            </div>
          </div>
        ) : (
          <div className="naveHeader_info_login_user_menu_userInfo">
            <div className="naveHeader_info_login_user_menu_userInfo_link_div">
              <a
                className="naveHeader_info_login_user_menu_userInfo_link_div_content"
                href="login"
              >
               Login
              </a>
            </div>
            <div className="naveHeader_info_login_user_menu_userInfo_link_div">
              <a
                className="naveHeader_info_login_user_menu_userInfo_link_div_content"
                href="singUp"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavHeader;
