import { useContext } from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../context/CartContext';
import { Button } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, removeQtItemToCart, removeFromCart } = useContext(CartContext)

  function addItemToCartItem() {
    addItemToCart(item)
  }

  function removeQtItemToCartItem() {
    removeQtItemToCart(item)
  }

  function removeFromCartItem() {
    removeFromCart(item)
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
            <span className='arrow' onClick={addItemToCartItem}>
              <ArrowBackIosNewOutlinedIcon />
            </span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={removeQtItemToCartItem}>
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