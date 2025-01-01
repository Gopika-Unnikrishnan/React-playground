import { createStore, combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";

const rootReducer= combineReducers({
    login:loginReducer,
    product:productReducer
})

const store = createStore(rootReducer)

export default store