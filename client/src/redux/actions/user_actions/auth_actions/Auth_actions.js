export const User_auth_actn = (type, data) =>{
    return {
      type : type,
      paylod : data
    };
  };
  

  export const User_auth_actn_reset = () =>{
    return {
      type : "resetAuthInput"
    };
  };