import { createStore, combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer= combineReducers({
    login:loginReducer,
    product:productReducer,
    user:userReducer
})

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store