import React from "react";
import styled from "styled-components";
import Search from "./Search";
import User from "./User";

function Header({ cartItem }) {
  return (
    <Wrapper>
      <Logo></Logo>
      <Search />
      <User cartItem={cartItem} />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background: rgb(255, 193, 7);
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url("/images/aditya-logo.png");
  height: 3rem;
  width: 5rem;
  margin-left: 4%;
  background-size: cover;
`;
