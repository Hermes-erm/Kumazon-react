import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'

function Cart() {
  return (
    <div className='cart_body'>
      <div className='cont'>
        <p className='p_ele'>Your Kumazon cart is empty now!</p>
        <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
  Continue shopping on the <Link to = "/" style={{textDecoration:'none', color:'#007185'}}>Kumazon.in  home page</Link></p>
      </div> 
    </div>
  )
}

export default Cart
