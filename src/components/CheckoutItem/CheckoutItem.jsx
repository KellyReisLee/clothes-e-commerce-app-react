import './checkout-item.styles.scss'
import { Button } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart, removeItemFromCart, clearItemFromCart} from '../../store/cart/cart-actions'
import {selectCartItems} from '../../store/cart/cart-selector'
const CheckoutItem = ({ item }) => {
const dispatch = useDispatch()
const cartItems = useSelector(selectCartItems)


  const { name, imageUrl, quantity, price } = item;
  //const { addItemToCart, removeQtItemToCart, removeFromCart } = useContext(CartContext)

  function addItemToCartItem() {
    dispatch(addItemToCart(cartItems,item))
  }

  function removeQtItemToCartItem() {
    dispatch(removeItemFromCart(cartItems,item))
  }

  function removeFromCartItem() {
    dispatch(clearItemFromCart(cartItems,item))
  }
  return (
    <>
      <hr className='line-item' />
      <div className='checkout-item-container'>
        <img src={imageUrl} alt={name} />
        <div className='checkout-middle'>
          <div className='equal-parts'>
            <h2 className='name'>{name}</h2>
          </div>
          <div className='checkout-qt equal-parts'>
            <span className='arrow' >
              <ArrowBackIosNewOutlinedIcon  onClick={removeQtItemToCartItem}/>
            </span>
            <span className='value'>{quantity}</span>
            <span className='arrow'onClick={addItemToCartItem} >
              <ArrowForwardIosOutlinedIcon />
            </span>
          </div>
          <div className='equal-parts price'>
            <p className='price'>${price}</p>
          </div>

        </div>

        <Button sx={{
          backgroundColor: 'gray',
          width: '3px',
          '&:hover': {
            backgroundColor: 'red', // Cor de fundo ao passar o mouse
          },
        }} className='remove-button' color='error' variant="contained" onClick={removeFromCartItem}>
          <DeleteForeverIcon />
        </Button>
      </div>
    </>
  )
}

export default CheckoutItem