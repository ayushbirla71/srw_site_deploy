import {combineReducers} from 'redux';
import Home_actions from "./buttons_controller/buttons_controller";
import Home_product_List from './productList_controller/productList_controller'
import Product_Page from "./productDetails_controller/productDetails_controller";
import Search_page_data from "./search_page_controller/search_page_data";
import Header_page_Details from "./header/Header_details.controller";
import User_auth_data from "./user_controller/user_auth_cont/user_auth_cont_input";
import User_credentials_login from './user_controller/user_credentials_cont/user_credentials_cont';
import User_details from './user_controller/user_details/user_details_cont_input';
import CartItems_list from './cartItems_controller/CartItems_cont';


const rootReducer = combineReducers({
    Home_actions,
    Home_product_List,
    Product_Page,
    Search_page_data,
    Header_page_Details,
    User_auth_data,
    User_credentials_login,
    User_details, 
    CartItems_list  
});

export default rootReducer;