import {createStore} from 'redux'

const initialData = {
    products : [
        {
            pName: "Apple",
            price: 100
        },
        {
            pName: "Banana",
            price: 200
        },
        {
            pName: "Mango",
            price: 300
        },
        {
            pName: "Orange",
            price: 400
        }
    ],
    cart : [],
    total : 0,
    users : [
        "Admin","Manager","End-user"
    ],
    LoginDetails : "None"
}


const reducer = (state=initialData, action)=>{
    if(action.type==="PURCHASE") {
        return{
            ...state,
            cart:[...state.cart,action.payLoad],
            total:state.total+ parseInt(action.payLoad.price)
        }
    }
    if(action.type==="DELETE") {
        return{
            ...state,
            cart:state.cart.filter((i,index)=> index !== action.payLoad.index),
            total:state.total - parseInt(action.payLoad.price)
        }
    }
    if(action.type==="LOGIN") {
        return{
            ...state,
            LoginDetails:action.payLoad
        }
    }
    return state
}
const store = createStore(reducer)

export default store