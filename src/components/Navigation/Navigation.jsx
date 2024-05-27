import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import logo from '../../assets/crown.svg'
//import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase.js'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartDropDown from '../CartDropDown/CartDropDown'
import { CartContext } from '../../context/CartContext'
import {NavigationContainer, ImageContainer, NavLinkComp, NavLinkItem } from './navigation.styles'
import { useSelector } from 'react-redux'
import {selectCurrentUser} from '../../store/user/user-selector'

const Navigation = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext)
  const currentUser = useSelector(selectCurrentUser)

  return (
    <>
      <NavigationContainer className='navigation'>
        <ImageContainer className='logo-container' >
          <Link to='/' >
            <img  src={logo} alt='' />
          </Link>
        </ImageContainer>
        <NavLinkComp>
          <NavLinkItem className='nav-link' to='/shop'>
            Shop
          </NavLinkItem>
          {
            currentUser ? (
              <>
                <NavLinkItem as='span' onClick={signOutUser} className='nav-link'>
                  Sign Out
                </NavLinkItem>

                <Badge  onClick={() => setIsCartOpen(!isCartOpen)} badgeContent={cartCount} color="primary" >
                  <ShoppingCartOutlinedIcon color="action" />
                </Badge>

              </>
            ) : (
              <NavLinkItem className='nav-link' to='/auth'>
                Sign in
              </NavLinkItem>
            )
          }
        </NavLinkComp>
        {
          isCartOpen && (
            <CartDropDown />
          )
        }
      </NavigationContainer>

      <Outlet />
    </>
  )
}

export default Navigation
