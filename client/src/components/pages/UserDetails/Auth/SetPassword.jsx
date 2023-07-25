import React, { useEffect, useState } from "react";
import "./SetPassword.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { User_auth_actn, User_auth_actn_reset } from "../../../../redux/actions/user_actions/auth_actions/Auth_actions";
import FeachApi from "../../../../utils/FeachAPI";


const SetPassword = () => {
  const nevigate = useNavigate();
  const { User_auth_data } = useSelector((state) => state);
  const Dispatch = useDispatch();
  const {type}= useParams();

  const [popup, setpopup] = useState(false);
  const OnPopup =()=>{

    setTimeout(() => {
      setpopup(false);
      nevigate("/login");
    }, 1000);
  }


  useEffect(() => {
    // if (User_auth_data.verificationStatus == false) {
    //   nevigate("/singUp");
    // }
  }, []);

  const OnHandel = ({ target: { name, value } }) => {
    Dispatch(User_auth_actn(name, value));
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      if(type=="singup"){
        var bodyFormData = new FormData();
        bodyFormData.append("fname", User_auth_data.fname);
        bodyFormData.append("lname", User_auth_data.lname);
        bodyFormData.append("email", User_auth_data.email);
        bodyFormData.append("gender", User_auth_data.gender);
        bodyFormData.append("phone", User_auth_data.phone);
        bodyFormData.append("password", User_auth_data.password);
  
  
        let Obj = {
          method: "post",
          url: "register",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        };
  
        let response = await FeachApi(Obj);
        if(response?.status === true){

          Dispatch(User_auth_actn_reset());
          console.log(response);
          setpopup(true);
          OnPopup();
          
        }
        else {
          console.log(response?.message);
        }
      }

      else{
        var bodyFormData = new FormData();
        bodyFormData.append("email", User_auth_data.email);
        bodyFormData.append("password", User_auth_data.password);

        let Obj = {
          method: "patch",
          url: "forgetPassword",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        };
  
        let response = await FeachApi(Obj);
        if(response?.status=== true){
          Dispatch(User_auth_actn_reset());
          console.log(response);
          setpopup(true)
          // nevigate("/login");
          OnPopup();
        }
        else{
          console.log(response.massage);
        }

      }


    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="setpassword">
      <div style={popup ? {display:"flex"}:{}} className="setpassword_popup">
        <label>successful</label>
      </div>
      <form>
        <h3>Set your password</h3>
        <label>
          Password
          <input
            name="password"
            onChange={OnHandel}
            required
            minLength="8"
            maxLength="16"
          />
        </label>
        <label>
          Confirm password
          <input
            name="confirmpassword"
            onChange={OnHandel}
            required
            minLength="8"
            maxLength="16"
          />
        </label>

        <button onClick={OnSubmit}>{type=="singup" ? "Sign up" :"conform"}</button>
        <button id="setpassword_back" onClick={()=>nevigate("/login")}>BACK to login</button>
      </form>
      <div></div>
    </div>
  );
};

export default SetPassword;
