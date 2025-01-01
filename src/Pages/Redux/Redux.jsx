import React from 'react'
import Purchase from '../../Components/Redux/Purchase'
import Cart from '../../Components/Redux/Cart/Cart'
import Total from '../../Components/Redux/Total/Total'
import Login from '../../Components/Redux/Login/Login'

function Redux() {
  return (
    <div>
        <Login/>
        <Purchase/>
        <Cart/>
        <Total/>
    </div>
  )
}

export default Redux