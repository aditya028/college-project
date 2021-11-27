import React from "react";
import styled from "styled-components";
import { getItem } from "../fakeCategory";
import ProductLayout from "./ProductLayout";

function Product({ title, cartItem, setCartItem }) {
  const items = getItem();
  const selectedItem = items.filter((obj) => obj.category === title);
  return (
    <div>
      <Container>
        <h1>{title}</h1>
        {selectedItem.map((itemDetail) => (
          <ProductLayout
            key={itemDetail.path}
            item={itemDetail}
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        ))}
      </Container>
    </div>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  h1 {
    text-align: center;
    padding-top: 2rem;
  }
`;
