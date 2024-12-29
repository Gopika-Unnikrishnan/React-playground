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
    total : 0
}

const reducer = (state=initialData, action)=>{
    return state
}
const store = createStore(reducer)

export default store