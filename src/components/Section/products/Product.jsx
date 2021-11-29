import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { getItem } from "../fakeCategory";
import getCategory from "../fakeCategory";
import ProductPage from "./ProductPage";

function Product({ title, cartItem, setCartItem }) {
  let { titleId } = useParams();
  const items = getItem();
  const category = getCategory();
  const selectedItem = items.filter((obj) => obj.category === titleId);
  let selectedCategory = category.filter((obj) => obj.title === titleId);
  if (selectedCategory.length === 0) selectedCategory = "";
  return (
    <div>
      <Container>
        <h1>{selectedCategory && selectedCategory[0].title}</h1>
        {selectedItem.map((itemDetail) => (
          <ProductPage
            key={itemDetail.title + itemDetail.path}
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
