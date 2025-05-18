import { SET_TOKEN,CLEAR_TOKEN } from "./action/userAction";
import {jwtDecode} from 'jwt-decode';
const tokenFromStorage = localStorage.getItem('token');
console.log(tokenFromStorage)
let decoded = null;
if(tokenFromStorage){
    decoded = jwtDecode(tokenFromStorage)
}


const reduxData = {
    token: tokenFromStorage,
    decoded: decoded
}

const initialState = {
    auth: reduxData
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TOKEN:
        return {
          ...state,
          auth: action.payload
        };
      case CLEAR_TOKEN:
        return {
          ...state,
          auth: null
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  