import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PURCHASE } from '../../../Store/action/productAction'

function Purchase() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.product.products)
    const login = useSelector((state)=>state.login.LoginDetails)
    const dispatchHandler=(e)=>{
        const pName = e.target.options[e.target.selectedIndex].text.split('-')[0]
        const price = e.target.value
        const obj = {
            pName,price
        }
        dispatch({type:PURCHASE,payLoad:obj})
    }
    return (
        <div className='customDiv'>
            <h3>Purchase component | {login}</h3>
            <hr></hr>
            <select onChange={(e)=>{dispatchHandler(e)}}>
            {products.map((product, index)=>{
                return(
                    <option key={index} value={product.price}>{product.pName}-{product.price}</option>
                )
            })}
            </select>
        </div>
    )
}

export default Purchase