export const User_details_act = (data) =>{
    return {
      type : "userInfo",
      paylod : data
    };
  };
  

  export const User_details_actn_reset = () =>{
    return {
      type : "resetUserInfo"
    };
  };