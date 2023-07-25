const initialState = null;

const User_details = (state = initialState, action) => {
  switch (action.type) {
    case "userInfo":
      return action.paylod;

    case "resetUserInfo":
      return initialState;

    default: return state;
  }
};

export default User_details;
