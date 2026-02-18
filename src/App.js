import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import Footer from "./components/Footer";
import About from "./components/About";
import Movies from "./components/Movies";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/> 
       
      </Routes>
       <Movies />
      <Footer/>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
