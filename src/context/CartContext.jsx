import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeQtItemToCart: () => { },
  removeFromCart: () => { },
  cartCount: 0,
  total: 0

})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [total, setTotal] = useState(0)


  // Total items in Cart
  useEffect(() => {
    const totalItems = cartItems?.reduce((accumulator, item) => {
      return accumulator + item.quantity
    }, 0)
    setCartCount(totalItems)
  }, [cartItems])


  //Total Price Cart
  useEffect(() => {
    const totalItems = cartItems?.reduce((accumulator, item) => {
      return accumulator + item.quantity
    }, 0)
    setCartCount(totalItems)
  }, [cartItems])


  useEffect(() => {
    const totalFinal = cartItems.reduce((accumulator, item) => {
      return accumulator + (item.quantity * item.price)
    }, 0)

    setTotal(totalFinal)

  }, [cartItems])



  // No mutations
  const addItemToCart = (productItem) => {
    // Verifica se o item já existe no carrinho
    const itemExistIndex = cartItems.findIndex((item) => item.id === productItem.id);

    if (itemExistIndex === -1) {
      // Se o item não existe no carrinho, adiciona-o com quantidade 1
      setCartItems([...cartItems, { ...productItem, quantity: 1 }]);
    } else {
      // Se o item já existe no carrinho, atualiza a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemExistIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };


  // No mutations
  const removeQtItemToCart = (productItem) => {
    const findIndex = cartItems.findIndex((item) => item.id === productItem.id);

    if (findIndex !== -1) {
      const cartItemsList = [...cartItems];
      const cartItem = cartItemsList[findIndex];

      if (cartItem.quantity > 0) {
        cartItem.quantity -= 1;
        setCartItems([...cartItemsList]);
      }
      if (cartItem.quantity <= 0) {
        const newList = cartItemsList.filter((item) => item.id !== cartItem.id);
        setCartItems(newList);
      }
    }
  };

  const removeFromCart = (productItem) => {
    const newList = cartItems.filter((item) => item.id !== productItem.id)
    setCartItems(newList)
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeQtItemToCart, removeFromCart, cartCount, setCartCount, total, setTotal }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}