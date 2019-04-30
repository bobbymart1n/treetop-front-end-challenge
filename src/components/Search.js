import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchBar = styled.input`
  border: none;
  height: 50px;
  font-size: 1em;
  width: 100%;
  background: transparent;
  margin-right: 1rem;
  border-bottom: 1px solid #ccc;
`;

const SearchContainer = styled.form`
  display: flex;
  padding-top: 1.5rem;
  & button {
    background-color: steelblue;
    border: none;
    font-size: 1em;
    color: #fff;
    border-radius: 10px;
    width: 150px;
  }
`;

const Search = props => {
  const [searchParam, setSearchParam] = useState("");
  const handleChange = e => {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    setSearchParam(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmittingSearchTerms(searchParam);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBar placeholder="Search Giphy" onChange={handleChange} />
      <button type="submit">Search</button>
    </SearchContainer>
  );
};

Search.propTypes = {
  onSubmittingSearchTerms: PropTypes.func.isRequired
};

export default Search;
