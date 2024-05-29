import './product-card.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux' 
import {addItemToCart} from '../../store/cart/cart-actions'
import {selectCartItems} from '../../store/cart/cart-selector'


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  //const { addItemToCart } = useContext(CartContext)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  


  const addItemToCartFunc = () => {
    return dispatch(addItemToCart(cartItems, product))
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>
          ${price}
        </span>
        <Button onClick={addItemToCartFunc} buttonType={BUTTON_TYPE_CLASSES.inverted}>ADD TO CARD</Button>
      </div>
    </div>
  )
}

export default ProductCard
