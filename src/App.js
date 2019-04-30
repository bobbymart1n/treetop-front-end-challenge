import React from "react";
import styled from "styled-components";

import Search from "./components/Search";

import { handleSearch } from "./utils";

import "./App.css";

const Container = styled.main`
  padding: 0 1.5rem;
`;

const App = () => (
  <div className="App">
    <Container>
      <Search onSubmittingSearchTerms={handleSearch} />
      <div />
    </Container>
  </div>
);

export default App;
