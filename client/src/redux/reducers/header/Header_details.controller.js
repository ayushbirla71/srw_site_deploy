const initialState = {
    search_title:""
};


const Header_page_Details = (state = initialState, action) =>{
    switch (action.type) {
        case "search_title":
            
            return {...state, [action.type]:action.paylod}
        default:
            return state
    }
}

export default Header_page_Details;