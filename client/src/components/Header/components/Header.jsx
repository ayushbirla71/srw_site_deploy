import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  TbMenu2,
  TbArrowBadgeDown,
  TbShoppingBag,
  TbSearch,
} from "react-icons/tb";
import logo from "../../../logos/IMG_20230724_175355-removebg-preview.png";
import NavHeader from "./NavHeader";
import { useSelector, useDispatch } from "react-redux";
import { Home_action_btn } from "../../../redux/actions/buttons_actions/Buttons_actions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header_Details_act } from "../../../redux/actions/header/Header_Details";

const Header = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const { User_credentials_login, Header_page_Details } = useSelector(
    (state) => state
  );
  let [searchInput, setSearchInput] = useState("");
  const { title } = useParams();

  const OnHandel = (name, value) => {
    
    if (name == "input") {
      console.log(value);
      Dispatch(Header_Details_act(value));
    } else {
      console.log(name);
      Dispatch(Home_action_btn(name));
    }
  };

  return (
    <div className="header">
      <div className="header_logo">
        <div className="header_menu">
          <TbMenu2 name="menu_btn" onClick={() => OnHandel("menu_btn")} />
          <div></div>
        </div>
        <a>
          <img src={logo} />
        </a>
      </div>
      <div className="header_search">
        <input
          type="search"
          onChange={(e) => {
            OnHandel("input", e.target.value);
          }}
          defaultValue={Header_page_Details.search_title}
          placeholder="Search"
        />

        <Link
          reloadDocument
          id="input_btn"
          to={`/search/${Header_page_Details?.search_title}/All/Default`}
        >
          <button type="submit">
            <TbSearch />
          </button>
        </Link>
      </div>

      <div className="header_info_login">
        <button
          onClick={() => navigate("/login")}
          style={User_credentials_login?.token ? { display: "none" } : {}}
          className="header_info_text"
        >
          Login
        </button>
        <a
          style={User_credentials_login?.token ? {} : { display: "none" }}
          onClick={() => OnHandel("cart_btn")}
        >
          <TbShoppingBag />
        </a>
        <label onClick={() => OnHandel("user_menu_btn")}>

          <img src="https://www.pngitem.com/pimgs/m/78-786501_black-avatar-png-user-icon-png-transparent-png.png" />

        </label>
      </div>
    </div>
  );
};

export default Header;
