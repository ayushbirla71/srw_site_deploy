import React, { useState } from "react";
import "./User_login.css";
import { useDispatch, useSelector } from "react-redux";
import { User_auth_actn, User_auth_actn_reset } from "../../../../redux/actions/user_actions/auth_actions/Auth_actions";
import FeachApi from "../../../../utils/FeachAPI";
import { User_login_credentials_act } from "../../../../redux/actions/user_actions/user_credentials/User_login_credentials";
import { useNavigate } from "react-router-dom";

const User_login = () => {
  const nevigate = useNavigate();
  const { User_auth_data } = useSelector((state) => state);

  const Dispatch = useDispatch();

  const OnHandel = ({ target: { name, value } }) => {
    Dispatch(User_auth_actn(name, value));
  };

  const [wrongInput, setwrongInput]= useState({email:false, password:false});

  const OnSubmit = async () => {
    console.log(User_auth_data.email);
    var bodyFormData = new FormData();
    bodyFormData.append("email", User_auth_data.email);
    bodyFormData.append("password", User_auth_data.password);

    try {
      let Obj = {
        method: "post",
        url: "login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      };
      let data = await FeachApi(Obj);

      if (data?.status === true) {
        console.log(data);
        Dispatch(User_login_credentials_act(data.data));
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("userId", data?.data?.userId);
        nevigate('/');
        window.location.reload();
        
      } else {
        console.log("login failed");
        console.log(data?.message);
        setwrongInput
      }

    } catch (error) {
      console.log(error.response.data);
    }
  };

  const OnCLick =(type)=>{
    Dispatch(User_auth_actn_reset())
    if(type == 'forget'){
      nevigate('/user forget password')
    }
    else{
        nevigate('/singUp')
    }
  }

  return (
    <div className="login_page">
      <div className="login_page_left_box">
        <div className="login_page_left_box_div">
          <div className="login_page_left_box_div_info">
            <div className="login_page_left_box_div_info_input">
              <h6>Sign in</h6>
              <label>

              <input
                name="email"
                onChange={OnHandel}
                type="email"
                placeholder="Email Address *"
              />
                <span style={wrongInput.email===true ? {display:"flex"}:{}}>woring password</span>
              </label>

              <label>

              <input
                name="password"
                onChange={OnHandel}
                type="password"
                placeholder="Password *"
              />
              <span style={wrongInput.password===true ? {display:"flex"}:{}}>woring password</span>
              </label>

              <div>
                <button onClick={() => OnSubmit()}>Login</button>
                <label onClick={()=>OnCLick("forget")}>Forgot your password?</label>
              </div>
            </div>
            <div className="login_page_left_box_div_info_btn">
              <button onClick={()=> OnCLick("singup")}>create new account</button>
            </div>
          </div>
          <div className="login_page_left_box_div_privacy">
            <label>Terms and conditions</label>
            <span></span>
            <label>Privacy policy</label>
          </div>
        </div>
      </div>

      <div className="login_page_right_box">
        <div>
          <img src="https://th.bing.com/th/id/OIP.MBlOJPg-beF5E6q2yR5k9gAAAA?pid=ImgDet&rs=1" />
        </div>
      </div>
    </div>
  );
};

export default User_login;
