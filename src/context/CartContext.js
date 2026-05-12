import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const userEmail = localStorage
    .getItem("email")
    ?.replace("@", "")
    .replace(".", "");

  const crudcrudURL = process.env.REACT_APP_CRUDCRUD_URL;

  useEffect(() => {

    const fetchCartItems = async () => {

      try {

        const response = await fetch(
          `${crudcrudURL}/cart${userEmail}`
        );

        const data = await response.json();

        setCartItems(data);

      } catch (error) {

        console.log(error);
      }
    };

    if (userEmail) {
      fetchCartItems();
    }

  }, [userEmail, crudcrudURL]);


  const addToCart = async (product) => {

    try {

      const productObj = {
        ...product,
        quantity: 1,
      };

      const response = await fetch(
        `${crudcrudURL}/cart${userEmail}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(productObj),
        }
      );

      const data = await response.json();

      setCartItems((prevItems) => {
        return [...prevItems, data];
      });

    } catch (error) {

      console.log(error);
    }
  };

  const removeItem = async (id) => {

    try {

      await fetch(
        `${crudcrudURL}/cart${userEmail}/${id}`,
        {
          method: "DELETE",
        }
      );

      const updatedItems = cartItems.filter(
        (item) => item._id !== id
      );

      setCartItems(updatedItems);

    } catch (error) {

      console.log(error);
    }
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;