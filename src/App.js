 
import React from "react";
import Header from "./components/Header";
import Store from "./components/Store";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
      <Header />
      <Store />
      <Footer />
    </CartProvider>
    </>
  );
}

export default App;