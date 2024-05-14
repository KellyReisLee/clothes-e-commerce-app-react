import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])


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


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}