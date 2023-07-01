const initialState = {
    menu_btn: true,
    cart_btn: true,
    user_info_btn: true,
};


const Home_actions = (state = initialState, action) =>{
  
    return {...state, [action.type] :!state[action.type]}
}

export default Home_actions;