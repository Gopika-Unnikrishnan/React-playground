import React from 'react'

function Purchase() {
    const products = [
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
    ]
    return (
        <div className='customDiv'>
            <h3>Purchase component</h3>
            <hr></hr>
            <select>
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