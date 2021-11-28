import React from "react";
// import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function User({ cartItem }) {
  let history = useHistory();
  function handleClick() {
    history.push("/cart");
  }
  return (
    <div style={{ margin: "30px" }}>
      <IconButton onClick={handleClick} aria-label="cart">
        <StyledBadge badgeContent={cartItem.length} color="success">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
}

export default User;

// const Cart = styled(div)`
//   height: 100%;
//   width: 10%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   button {
//     background-color: transparent;
//     border: 0;
//     margin: 8px;
//   }
// `;
