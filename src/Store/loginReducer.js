import { LOGIN } from "./action/loginAction"

const initialData={
    users : [
        "Admin","Manager","End-user"
    ],
    LoginDetails : "None"
}

const loginReducer=(state=initialData,action)=>{
    if(action.type===LOGIN) {
        return{
            ...state,
            LoginDetails:action.payLoad
        }
    }
    return state
}

export default loginReducer