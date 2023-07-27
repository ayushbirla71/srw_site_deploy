import React, { useEffect } from "react";
import "./MainHeader.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import NavHeader from "./components/NavHeader";
import { useDispatch, useSelector } from "react-redux";
import { User_login_credentials_act } from "../../redux/actions/user_actions/user_credentials/User_login_credentials";
import FeachApi from "../../utils/FeachAPI";
import { useState } from "react";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { User_details_act } from "../../redux/actions/user_actions/user_details/User_details";

const MainHeader = () => {
  const [userDataLoding, setuserDataLoding] = useState(false);
  const [effectCall, seteffectCall] = useState(true);
  const [input, setinput] = useState({
    token: "",
    userId: "",
  });
  const Dispatch = useDispatch();
  const { User_credentials_login } = useSelector((state) => state);

  useEffect(() => {
    demo();
    console.log("hello");
  }, []);

  const demo = async () => {
    if (!User_credentials_login.token) {
      let token = await AsyncLocalStorage.getItem("token");
      let userId = await AsyncLocalStorage.getItem("userId");
      setinput({ token: token, userId: userId });

      Dispatch(User_login_credentials_act({ token: token, userId: userId }));
      OnSubmit(token, userId);
    }
  };

  const OnSubmit = async (token, userId) => {
    try {
      let Obj = {
        method: "get",
        url: `user/${userId}/profile`,
        headers: { Authorization: `Bearer ${token}` },
      };
      let data = await FeachApi(Obj);

      if (data?.status === true) {
        Dispatch(User_details_act(data?.data));
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainheader">
      <TopHeader />
      <Header />
      <NavHeader />
    </div>
  );
};

export default MainHeader;
