const initialState = {};

const User_credentials_login = (state = initialState, action) => {
  switch (action.type) {
    case "token":
      return { ...action.paylod };

    case "resetToken":
      return initialState;

    default:
      return { ...state };
  }
};

export default User_credentials_login;
