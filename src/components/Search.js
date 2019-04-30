import React from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  border: none;
  height: 50px;
  font-size: 1em;
  width: 100%;
`;

const SearchContainer = styled.div`
  background-color: #222;
`;

const Search = () => (
  <SearchContainer>
    <SearchBar placeholder="Search Giphy" />
  </SearchContainer>
);

export default Search;
