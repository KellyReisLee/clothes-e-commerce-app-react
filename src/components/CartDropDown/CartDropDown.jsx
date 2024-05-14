import React from 'react'
import Button from '../Button/Button'
import './cart-drop-down.styles.scss'

const CartDropDown = () => {
  return (
    <div className='cart-container'>
      <div className='cart-items' />
      <Button >
        Checkout
      </Button>
    </div>
  )
}

export default CartDropDown