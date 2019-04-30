import React, { useState } from "react";
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

const Search = () => {
  const [searchParam, setSearchParam] = useState("");
  const handleChange = e => {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    setSearchParam(value);
  };
  console.log(searchParam);

  return (
    <SearchContainer>
      <SearchBar placeholder="Search Giphy" onChange={handleChange} />
    </SearchContainer>
  );
};

export default Search;
