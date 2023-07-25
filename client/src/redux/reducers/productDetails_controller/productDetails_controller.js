const initialState = {};


const Product_Page_Details_cont = (state = initialState, action) =>{
    switch (action.type) {
        case "Feach_Product_Page_data":
            return action.paylod
    
        default:
            return state
    }
}

export default Product_Page_Details_cont;