import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Product from "./components/Section/products/Product";
import CartPage from "./components/Header/CartPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header cartItem={cartItem} />
        <Route path="/" exact>
          <Section />
        </Route>
        <Route path="/cart" exact>
          <CartPage cartItem={cartItem} setCartItem={setCartItem} />
        </Route>
        <Route path="/:titleId">
          <Product
            title="Laptop"
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
