import React from "react";
import styled from "styled-components";

function Search(props) {
  return (
    <Input>
      <input id="input-txt" type="text" />
      <button type="button" className="btn btn-primary">
        Search
      </button>
    </Input>
  );
}

export default Search;

const Input = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  #input-txt {
    margin: 5px;
    width: 90%;
    height: 40px;
    border-radius: 5px;
  }
`;
