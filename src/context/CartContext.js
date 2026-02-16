import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.title === product.title
    );

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (title) => {
    const updatedItems = cartItems.filter(
      (item) => item.title !== title
    );
    setCartItems(updatedItems);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
