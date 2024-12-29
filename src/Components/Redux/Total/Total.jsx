import React from 'react'
import { useSelector } from 'react-redux'

function Total() {
    const total = useSelector((state)=>state.total)
  return (
    <div className='customDiv'>
        <h3>Total</h3>
        <hr></hr>
        <h3>Total = {total}</h3>
    </div>
  )
}

export default Total