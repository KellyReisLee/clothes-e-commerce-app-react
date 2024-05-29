import React, { useContext } from 'react'
import Button from '../Button/Button'
import{CartContainer, CartItems, EmptyMessage} from './cart-drop-down.styles'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {selectCartItems} from '../../store/cart/cart-selector'
const CartDropDown = () => {
  
  const cartItems = useSelector(selectCartItems)
  
  
 
  return (
    <CartContainer>
      <CartItems>
        {
          cartItems.length === 0 && <EmptyMessage>Cart is Empty!</EmptyMessage>
        }

        {
          cartItems.length > 0 && cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        }
      </CartItems>
      <Link className='link' to='/checkout'>
        <Button >
          Checkout
        </Button>
      </Link>
    </CartContainer>
  )
}

export default CartDropDown