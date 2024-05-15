import React, { useContext } from 'react'
import Button from '../Button/Button'
import './cart-drop-down.styles.scss'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  console.log(cartItems);
  return (
    <div className='cart-container'>
      <div className='cart-items'>
        {
          cartItems.length === 0 && <p className='empty-message'>Cart is Empty!</p>
        }

        {
          cartItems.length > 0 && cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        }
      </div>
      <Link className='link' to='/checkout'>
        <Button >
          Checkout
        </Button>
      </Link>
    </div>
  )
}

export default CartDropDown