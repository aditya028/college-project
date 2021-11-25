import React from "react";
import styled from "styled-components";
import CategoryItem from "./categoryItem";
import getCategory from "./fakeCategory";

function ItemCategory(props) {
  const categoryList = getCategory();
  console.log(categoryList);
  return (
    <Container>
      {categoryList.map((item) => (
        <CategoryItem title={item.title} path={item.path} />
      ))}
    </Container>
  );
}

export default ItemCategory;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  bottom: 15rem;
  margin: 0 4%;
  border: 3px solid red;
`;
