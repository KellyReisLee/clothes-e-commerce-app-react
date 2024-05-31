import {  useEffect } from 'react'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import {selectCartItems, selectCartTotal} from '../../store/cart/cart-selector'
import { useSelector, useDispatch } from 'react-redux'
import {setIsCartOpen} from '../../store/cart/cart-actions'
import './checkout-list.styles.scss'
import PaymentForm from '../../components/PaymentForm/PaymentForm'

const CheckoutList = () => {

const cartItems = useSelector(selectCartItems)
const cartTotal = useSelector(selectCartTotal)
const dispatch = useDispatch()


  useEffect(() => {
   dispatch(setIsCartOpen(false))
  }, [])

  return (
    <>
      {
        !cartItems&& (
          <div className='cart-empty'>
            <p>Cart is Empty</p>
          </div>
        )

      }
      {
        cartItems && (
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

              <h3 className='total'>Total: $<span>{cartTotal}</span></h3>
              <hr className='line-item' />
              <PaymentForm/>
            </div>
          </div>
        )



      }
    </>
  )
}

export default CheckoutList
