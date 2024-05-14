import React from 'react'
import './cart-item.styles.scss'
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='cart-item-content'>
        <h2 >{name}</h2>
        <div className='cart-item-priceQt'>
          <span>{quantity}</span>
          <span>x</span>
          <span>${price}</span>
        </div>
      </div>

    </div>
  )
}

export default CartItem
