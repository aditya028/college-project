import React from "react";
import styled from "styled-components";
import ItemCategoryLayout from "./ItemCategoryLayout";
import getCategory from "./fakeCategory";

function ItemCategory(props) {
  const categoryList = getCategory();
  return (
    <Container>
      {categoryList.map((item) => (
        <ItemCategoryLayout
          key={item.title}
          title={item.title}
          path={item.path}
        />
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
  bottom: 18rem;
  margin: 0 4%;
`;
