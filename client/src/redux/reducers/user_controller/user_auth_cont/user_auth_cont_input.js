const initialState = {
    fname:"",
    lname:"",
    email:"",
    gender:"",
    phone:"",
    password:"",
    confirmpassword:'',
    verificationStatus:false,
    tokan:undefined,
    _id:undefined
};


const User_auth_data = (state = initialState, action) =>{
 if(action.type=="resetAuthInput"){
    return initialState;
 }
 else{
    return ({...state, [action.type]: action.paylod})
 }
}

export default User_auth_data;