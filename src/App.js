import React from "react";
import styled from "styled-components";

import Search from "./components/Search";

import "./App.css";

const Container = styled.main`
  padding: 0 1.5rem;
`;

const App = () => (
  <div className="App">
    <Container>
      <Search />
    </Container>
  </div>
);

export default App;
