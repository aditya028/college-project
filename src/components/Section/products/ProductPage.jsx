import React from "react";
import ProductLayout from "./ProductLayout";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function ProductPage({ item, cartItem, setCartItem }) {
  return (
    <Container maxWidth="md">
      <ProductLayout
        key={item.title + item.path}
        item={item}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      <Button
        variant="contained"
        color="success"
        style={({ margin: "10px" }, { position: "relative" }, { left: "40%" })}
        id="btn"
        onClick={() => setCartItem((cartItem) => [...cartItem, item])}
      >
        Add To Cart
      </Button>
    </Container>
  );
}

export default ProductPage;
