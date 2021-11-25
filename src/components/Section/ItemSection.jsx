import React from "react";
import styled from "styled-components";
import getCategory from "./fakeCategory";

function ItemSection(props) {
  const category = getCategory();
  return (
    <>
      {category.map((item) => (
        <div className="item-container" id={`${item.title}`}>
          {item.title}
        </div>
      ))}
    </>
  );
}

export default ItemSection;
