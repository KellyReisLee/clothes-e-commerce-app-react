import React, { useContext } from 'react'
import Button from '../Button/Button'
import{CartContainer, CartItems, EmptyMessage} from './cart-drop-down.styles'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  console.log(cartItems);
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