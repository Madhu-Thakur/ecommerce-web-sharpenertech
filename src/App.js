import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CartProvider from "./context/CartContext";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

         <Route path="/store" exact component={Store} />
    <Route path="/store/:productId" component={ProductDetail} />

          {/* <Route path="/store">
            <Store />
          </Route> */}

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
