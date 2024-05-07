import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
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

        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
