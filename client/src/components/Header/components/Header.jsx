import React from "react";
import "./Header.css";
import { TbMenu2,TbArrowBadgeDown, TbShoppingBag, TbSearch } from "react-icons/tb";
import logo from "../logo/Logo.png";
import NavHeader from "./NavHeader";
import {useSelector, useDispatch} from 'react-redux';
import { Home_action_btn } from "../../../redux/actions/buttons_actions/Buttons_actions";



const Header = () => {
  const Dispatch= useDispatch();
  const header_state = useSelector((state)=>state.Home_actions)
  
  
  const OnHandel = (name)=>{
    console.log(name);
    Dispatch(Home_action_btn(name))
  
  }

  return (
    <div className="header">
      
      <div className="header_logo">
      <div className="header_menu">
        
        <TbMenu2 name="menu_btn" onClick={()=> OnHandel("menu_btn")}/>
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
        <a onClick={()=>OnHandel("cart_btn")}><TbShoppingBag/></a>
      </div>
    </div>
  );
};

export default Header;
