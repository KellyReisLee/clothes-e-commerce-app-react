import React, { useContext } from 'react'
import Button from '../Button/Button'
import './cart-drop-down.styles.scss'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
  console.log(cartItems);
  return (
    <div className='cart-container'>
      <div className='cart-items'>
        {
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        }
      </div>
      <Button >
        Checkout
      </Button>
    </div>
  )
}

export default CartDropDown