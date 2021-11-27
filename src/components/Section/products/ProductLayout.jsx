import React from "react";
import styled from "styled-components";

function ProductLayout({ item, cartItem, setCartItem }) {
  return (
    <Container>
      <div className="image">
        <img className="image" src={`${item.path}`} alt="mobile" />
      </div>
      <div className="itemDetail">
        <h4>{item.title}</h4>
        {item.rating}
        <br />
        <span id="d-price">₹{item.dis_price}</span>
        <span id="a-price">₹{item.org_price}</span>
        {item.discount}
        <br />
        <button
          id="btn"
          onClick={() => setCartItem((cartItem) => [...cartItem, item])}
        >
          Add To Cart
        </button>
      </div>
    </Container>
  );
}

export default ProductLayout;

const Container = styled.div`
  border-top: 2px solid rgb(221, 221, 221);
  padding: 10px;
  height: 35vh;
  margin: 50px 13% 0 13%;
  display: flex;
  align-content: space-around;
  .itemDetail {
    width: 65%;
    padding-top: 2%;
    #a-price {
      font-size: 15px;
      text-decoration: line-through;
      margin: 10px;
    }
    #d-price {
      font-size: 30px;
      color: red;
      margin: 10px;
    }
  }
  .image {
    width: 35%;
  }
  .image img {
    height: 100%;
    width: auto;
    z-index: -1;
  }
  #btn {
    margin: 20px;
    padding: 5px 40px;
    font-size: 20px;
    border: 1px solid black;
    background-color: rgb(255, 216, 20);
    border-radius: 10px;
    cursor: pointer;
  }
`;
