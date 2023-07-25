export const User_login_credentials_act = (data) =>{
    return {
      type : "token",
      paylod : data
    };
  };
  

  export const User_login_credentials_act_reset = () =>{
    return {
      type : "resetToken"
    };
  };