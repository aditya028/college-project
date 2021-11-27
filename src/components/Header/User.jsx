import React from "react";
import styled from "styled-components";

function User({ cartItem }) {
  return (
    <Cart>
      <button>
        <i className="bi bi-cart4"></i>
      </button>
      {cartItem.length}
    </Cart>
  );
}

export default User;

const Cart = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    border: 0;
    margin: 8px;
  }
`;
