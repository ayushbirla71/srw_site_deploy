const initialState = [];


const Search_page_data = (state = initialState, action) =>{
    switch (action.type) {
        case "Feach_Search_Page_data":
            
            return action.paylod
    
        default:
            return state
    }
}

export default Search_page_data;