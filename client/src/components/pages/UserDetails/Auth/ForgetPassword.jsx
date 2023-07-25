import React from 'react';
import './ForgetPassword.css';
import { useDispatch, useSelector } from "react-redux";
import { User_auth_actn, User_auth_actn_reset } from '../../../../redux/actions/user_actions/auth_actions/Auth_actions';
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { User_auth_data } = useSelector((state) => state);
  const nevigate = useNavigate();
  const Dispatch = useDispatch();
  

  const OnHandel = ({ target: { name, value } }) => {
    Dispatch(User_auth_actn(name, value));
  };

  const OnClick = (action_type) => {
    if(action_type=="conform"){
      if(User_auth_data?.email){
        nevigate("/forget/emailVarification")
      }
    }
    else if(action_type=="back"){
      Dispatch(User_auth_actn_reset());
      nevigate('/login')
    }
  };

  return (
    <div className="forgetpassword">
      {JSON.stringify(User_auth_data)}
    <div className="forgetpassword_div">
      <div className="forgetpassword_div_input">
        <h6>FORGOT YOUR PASSWORd</h6>
        <input
         onChange={OnHandel}
          name="email"
          type="email"
          placeholder="Email Address *"
        />

        <button onClick={()=>OnClick("conform")}>FORGOT YOUR PASSWORd</button>

        <button onClick={()=>OnClick("back")} id='forgetpassword_cancell'>BACK to login</button>
      </div>

    </div>
    <div className="forgetpassword_privacy">
      <label>Terms and conditions</label>
      <span></span>
      <label>Privacy policy</label>
    </div>
  </div>
  )
}

export default ForgetPassword