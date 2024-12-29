import React from 'react'
import Purchase from '../../Components/Redux/Purchase'
import Cart from '../../Components/Redux/Cart/Cart'
import Total from '../../Components/Redux/Total/Total'

function Redux() {
  return (
    <div>
        <Purchase/>
        <Cart/>
        <Total/>
    </div>
  )
}

export default Redux