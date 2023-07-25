const initialState = null;


const CartItems_list_Cont = (state = initialState, action) =>{
    switch (action.type) {
        case "cartItemsList":
            return action.paylod
    
        default:
            return state
    }
}

export default CartItems_list_Cont;