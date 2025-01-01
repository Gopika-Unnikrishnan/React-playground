import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./style.css"
import { DELETE } from '../../../Store/action/productAction'

function Cart() {
  const dispatch=useDispatch()
  const cart = useSelector((state)=>state.product.cart)
  const login = useSelector((state)=>state.login.LoginDetails)
  const deleteHandler=(index,price)=>{
    dispatch({
      type:DELETE,
      payLoad: {index,price}
    })
  }
  return (
    <div className='customDiv'>
    <h3>Cart | {login}</h3>
    <hr></hr>
    <ul>
      {
        cart.map((product,index)=>{
          return(
            <li onClick={()=>deleteHandler(index,product.price)} key={index}>
              {product.pName}-{product.price}
            </li>
          )
        })
      }
    </ul>
    </div>
  )
}

export default Cart