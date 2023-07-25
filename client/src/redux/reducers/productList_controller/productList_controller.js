const initialState = [];


const Home_product_List = (state = initialState, action) =>{
    switch (action.type) {
        case "Home_product_List_Action":
            
            return action.paylod
    
        default:
            return state
    }
}

export default Home_product_List;