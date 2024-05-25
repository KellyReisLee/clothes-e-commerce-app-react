import { createContext, useReducer } from "react";
import {addItemToCart1, removeQtItemToCart1, removeFromCart1} from '../utils/helper-functions'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeQtItemToCart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

// Objeto com os types para ajudar a organizar.
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_OPEN_CART: 'SET_OPEN_CART'

}

// Fixed naming to initialState
const initialState = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_OPEN_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
    
      throw new Error(`Unhandled type of ${type} in cartReducer.`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, initialState);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newCartTotal = newCartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addItemToCart1(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeQtItemToCart = (cartItemToRemove) => {
    const newCartItems = removeQtItemToCart1(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const removeFromCart = (cartItemToClear) => {
    const newCartItems = removeFromCart1(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: "SET_OPEN_CART", payload: bool });
  };

  const value = {
    isCartOpen,
    addItemToCart,
    removeQtItemToCart,
    removeFromCart,
    setIsCartOpen,
    cartTotal,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
