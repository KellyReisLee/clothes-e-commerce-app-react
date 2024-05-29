import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../assets/crown.svg";
//import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase.js";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartDropDown from "../CartDropDown/CartDropDown";
import {
  NavigationContainer,
  ImageContainer,
  NavLinkComp,
  NavLinkItem,
} from "./navigation.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";
import {
  selectIsCartOpen,
  selectCartCount,
 
} from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-actions";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  console.log(cartCount)
  

  function toogle() {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <>
      <NavigationContainer className="navigation">
        <ImageContainer className="logo-container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </ImageContainer>
        <NavLinkComp>
          <NavLinkItem className="nav-link" to="/shop">
            Shop
          </NavLinkItem>
          {currentUser ? (
            <>
              <NavLinkItem as="span" onClick={signOutUser} className="nav-link">
                Sign Out
              </NavLinkItem>

              <Badge onClick={toogle} badgeContent={cartCount} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </>
          ) : (
            <NavLinkItem className="nav-link" to="/auth">
              Sign in
            </NavLinkItem>
          )}
        </NavLinkComp>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
