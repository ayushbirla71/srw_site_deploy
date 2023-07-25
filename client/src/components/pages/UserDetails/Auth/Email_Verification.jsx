import React, { useEffect, useState } from "react";
import "./Email_Verification.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FeachApi from "../../../../utils/FeachAPI";
import { User_auth_actn } from "../../../../redux/actions/user_actions/auth_actions/Auth_actions";

const Email_Verification = () => {
  const nevigate = useNavigate();
  const [OTP, setOTP] = useState(null);
  const [validOtp, setvalidOtp] = useState("");
  const [popup, setpopup] = useState(false);
  const { User_auth_data } = useSelector((state) => state);
  const { type } = useParams();
  const Dispatch = useDispatch();

  useEffect(() => {
    if (User_auth_data?.email == "") {
      nevigate("/singUp");
    } else {
      OtpSender();
    }
  }, []);

  const OnPopup =()=>{
    setpopup(true);
    setTimeout(() => {
      setpopup(false);
    }, 1000);
  }

  const OtpSender = async () => {
    try {
      let Obj = {
        url: "emailVerification",
        method: "post",
        data: { email: User_auth_data.email },
      };
      let data = await FeachApi(Obj);
      if (data?.status == true) {
        setOTP(data.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [otpinput, setotpinput] = useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
    disable: true,
  });

  const handleChange = (value1, event) => {
    setotpinput({ ...otpinput, [value1]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.target);
    const otp =
      otpinput.otp1 +
      otpinput.otp2 +
      otpinput.otp3 +
      otpinput.otp4 +
      otpinput.otp5 +
      otpinput.otp6;
    if (type == "singup") {
      console.log(otp);
      console.log(OTP);
      if (otp === OTP) {
        Dispatch(User_auth_actn("verificationStatus", true));
        nevigate("/singup/passwordset");
      }
      else{
        OnPopup();
      }
    } else {
      console.log(otp);
      console.log(OTP);
      if (otp === OTP) {
        Dispatch(User_auth_actn("verificationStatus", true));
        nevigate("/forget/passwordset");
      }
      else{
        OnPopup();
      }
    }
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  return (
    <div className="email_varification">
      <div
        style={popup ? { display: "flex" } : {}}
        className="email_varification_popup"
      >
        <label>Wrong OTP</label>
      </div>

      <div className="email_varification_header">
        <h3>
          Email Confirmation, before
          <span> we get started...</span>
        </h3>
        <p>
          Thank you for registering on socialRepeat, to finish your registration
          please confirm your email by clicking on the button below:
          <label>{User_auth_data.email}</label>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="email_varification_Otp">
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otpinput.otp1}
            onChange={(e) => handleChange("otp1", e)}
            tabIndex="1"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otpinput.otp2}
            onChange={(e) => handleChange("otp2", e)}
            tabIndex="2"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otpinput.otp3}
            onChange={(e) => handleChange("otp3", e)}
            tabIndex="3"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otpinput.otp4}
            onChange={(e) => handleChange("otp4", e)}
            tabIndex="4"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otpinput.otp5}
            onChange={(e) => handleChange("otp5", e)}
            tabIndex="5"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otpinput.otp6}
            onChange={(e) => handleChange("otp6", e)}
            tabIndex="6"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
        </div>

        <div className="email_varification_conform">
          <button onClick={handleSubmit}>confirm your email</button>
        </div>
      </form>
      <div className="email_varification_re_send">
        <label>
          Didn't sign up for socialRepeat?<a> Let us know.</a>
        </label>
      </div>

      <hr />

      <div className="email_varification_info">
        <p>
          If you’re having trouble with the button above, copy and paste the URL
          below into your web browser.
        </p>
      </div>
    </div>
  );
};

export default Email_Verification;
