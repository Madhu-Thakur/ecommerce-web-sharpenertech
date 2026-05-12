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
import Login from "./components/Login";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          {/* <Route path="/store" exact>
            {isLoggedIn ? <Store /> : <Redirect to="/login" />}
          </Route>

          <Route path="/store/:productId">
            {isLoggedIn ? <ProductDetail /> : <Redirect to="/login" />}
          </Route> */}

          <Route path="/store" exact>
            {token ? <Store /> : <Redirect to="/login" />}
          </Route>

          <Route path="/store/:productId">
            {token ? <ProductDetail /> : <Redirect to="/login" />}
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login />
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
