import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./style.css"

function Cart() {
  const dispatch=useDispatch()
  const cart = useSelector((state)=>state.cart)
  const deleteHandler=(index,price)=>{
    dispatch({
      type:"DELETE",
      payLoad: {index,price}
    })
  }
  return (
    <div className='customDiv'>
    <h3>Cart</h3>
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