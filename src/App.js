import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Store from "./components/Store";
import Footer from "./components/Footer";
import About from "./components/About";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Store />}/>
        <Route path="/about" element={<About />}/> 
      </Routes>
      <Footer/>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
