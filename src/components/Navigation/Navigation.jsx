import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/Context'
import { signOutUser } from '../../utils/firebase.js'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);


  const handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
              <span onClick={handleSignOut} className='nav-link'>
                Sign Out
              </span>
            ) : (
              <NavLink className='nav-link' to='/auth'>
                Sign in
              </NavLink>
            )
          }
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
