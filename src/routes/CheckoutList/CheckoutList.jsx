import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import './checkout-list.styles.scss'
const CheckoutList = () => {
  const { cartItems, setIsCartOpen, total } = useContext(CartContext)


  useEffect(() => {
    setIsCartOpen(false)
  }, [])

  return (
    <>
      {
        cartItems.length === 0 && (
          <div className='cart-empty'>
            <p>Cart is Empty</p>
          </div>
        )

      }
      {
        cartItems.length > 0 && (
          <div className='checkout-main'>
            <div className='checkout-list-container' >
              <div className='checkout-header'>
                <div className='header-block'>
                  <span>Product</span>
                </div>
                <div className='header-block'>
                  <span>Description</span>
                </div>
                <div className='header-block'>
                  <span>Quantity</span>
                </div>
                <div className='header-block'>
                  <span>Price</span>
                </div>
                <div className='header-block'>
                  <span>Remove</span>
                </div>
              </div>
              {
                cartItems.map((item) => (
                  <CheckoutItem key={item.id} item={item} />
                ))
              }

              <h3 className='total'>Total: $<span>{total}</span> </h3>
              <hr className='line-item' />
            </div>
          </div>
        )



      }
    </>
  )
}

export default CheckoutList
