import React, { useState } from "react";
import styled from "styled-components";

import Search from "./components/Search";

import { API_URL, SEARCH_PARAM, API_KEY } from "./constants";

import "./App.css";

const Container = styled.main`
  padding: 0 1.5rem;
`;

const App = () => {
  const [gifs, setGifs] = useState(null);
  console.log(gifs);

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
          {gifs !== null && (
            <>
              {gifs.map(gif => (
                <img
                  key={gif.id}
                  src={`${gif.images.original.url}`}
                  alt={gif.title}
                />
              ))}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
