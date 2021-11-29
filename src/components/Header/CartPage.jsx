import React from "react";
import Container from "@mui/material/Container";
import ProductLayout from "../Section/products/ProductLayout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CartPage({ cartItem, setCartItem }) {
  return (
    <div>
      <Container maxwidth="sm">
        <Typography
          variant="h3"
          component="h2"
          style={{ margin: "40px 0 40px 40%" }}
        >
          Items in Cart
        </Typography>
        {cartItem.map((item) => (
          <ProductLayout
            item={item}
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        ))}
        <br />
        <Button
          variant="contained"
          color="success"
          style={{ padding: "1% 10%" }}
          onClick={() => alert("Thank you for shopping from out website ")}
        >
          Buy Now
        </Button>
      </Container>
    </div>
  );
}

export default CartPage;
