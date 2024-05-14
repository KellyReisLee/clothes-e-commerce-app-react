import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/Context'
import { signOutUser } from '../../utils/firebase.js'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartDropDown from '../CartDropDown/CartDropDown'
import { CartContext } from '../../context/CartContext'


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { setIsCartOpen, isCartOpen, cartItems } = useContext(CartContext)

  const totalItems = cartItems?.reduce((accumulator, item) => {
    return accumulator + item.quantity
  }, 0)

  return (
    <>
      <header className='navigation'>
        <div className='logo-container' >
          <Link to='/' >
            <img className='logo' src={logo} alt='' />
          </Link>
        </div>
        <div className='nav-links-container'>
          <NavLink className='nav-link' to='/shop'>
            Shop
          </NavLink>
          {
            currentUser ? (
              <>
                <span onClick={signOutUser} className='nav-link'>
                  Sign Out
                </span>
                <Badge onClick={() => setIsCartOpen(!isCartOpen)} badgeContent={totalItems} color="primary">
                  <ShoppingCartOutlinedIcon color="action" />
                </Badge>
              </>
            ) : (
              <NavLink className='nav-link' to='/auth'>
                Sign in
              </NavLink>
            )
          }
        </div>
        {
          isCartOpen && (
            <CartDropDown />
          )
        }
      </header>

      <Outlet />
    </>
  )
}

export default Navigation
