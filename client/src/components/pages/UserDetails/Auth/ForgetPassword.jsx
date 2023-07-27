import React, { useState } from "react";
import "./ForgetPassword.css";
import { useDispatch, useSelector } from "react-redux";
import {
  User_auth_actn,
  User_auth_actn_reset,
} from "../../../../redux/actions/user_actions/auth_actions/Auth_actions";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { User_auth_data } = useSelector((state) => state);
  const nevigate = useNavigate();
  const Dispatch = useDispatch();
  const [requiredFiled, setrequiredFiled] = useState(null);

  const OnHandel = ({ target: { name, value } }) => {
    setrequiredFiled(null);
    Dispatch(User_auth_actn(name, value));
  };

  const OnClick = (action_type) => {
    if (action_type === "conform") {
      if (User_auth_data?.email) {
        if (/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(User_auth_data?.email)) {
          console.log("hello");
          nevigate("/forget/emailVarification");
        } else {
          setrequiredFiled("Invalid email addresses");
        }
      } else {
        setrequiredFiled("Email ID is Required");
      }
    } else if (action_type == "back") {
      Dispatch(User_auth_actn_reset());
      nevigate("/login");
    }
  };

  return (
    <div className="forgetpassword">
      <div className="forgetpassword_div">
        <div className="forgetpassword_div_input">
          <h6>FORGOT YOUR PASSWORd</h6>

          <label>
            <input
              onChange={OnHandel}
              name="email"
              type="email"
              placeholder="Email Address *"
            />
            <span>{requiredFiled === null ? "" : requiredFiled}</span>
          </label>

          <button onClick={() => OnClick("conform")}>
            FORGOT YOUR PASSWORd
          </button>

          <button onClick={() => OnClick("back")} id="forgetpassword_cancell">
            BACK to login
          </button>
        </div>
      </div>
      <div className="forgetpassword_privacy">
        <label>Terms and conditions</label>
        <span></span>
        <label>Privacy policy</label>
      </div>
    </div>
  );
};

export default ForgetPassword;
