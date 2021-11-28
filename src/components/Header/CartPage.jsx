import React from "react";
import Container from "@mui/material/Container";
import ProductLayout from "../Section/products/ProductLayout";

function CartPage({ cartItem, setCartItem }) {
  return (
    <div>
      <Container maxwidth="sm">
        <h1>Items in Cart</h1>
        {cartItem.map((item) => (
          <ProductLayout
            item={item}
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        ))}
      </Container>
    </div>
  );
}

export default CartPage;
