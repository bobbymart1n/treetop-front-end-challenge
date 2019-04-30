import React, { useState } from "react";
import styled from "styled-components";

import Search from "./components/Search";

import { API_URL, SEARCH_PARAM, API_KEY } from "./constants";

import "./App.css";

const Container = styled.main`
  padding: 0 1.5rem;
  & h1 {
    margin-top: 3rem;
  }
  & .gifs-wrapper {
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    & img {
      box-sizing: border-box;
      width: 100%;
    }
  }
`;

const App = () => {
  const [gifs, setGifs] = useState(null);

  const handleSearch = async searchInput => {
    const parsedSearchTerm = searchInput.split(" ").join("+");
    const response = await fetch(
      `${API_URL}${SEARCH_PARAM}${parsedSearchTerm}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setGifs(data.data);
  };
  return (
    <div className="App">
      <Container>
        <Search onSubmittingSearchTerms={handleSearch} />
        <div>
          {gifs === null && (
            <h1>
              Search for some gifs! They'll show here after submitting the
              search.
            </h1>
          )}
          {gifs !== null && (
            <div className="gifs-wrapper">
              {gifs.map(gif => (
                <img
                  key={gif.id}
                  src={`${gif.images.downsized_medium.url}`}
                  alt={gif.title}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
