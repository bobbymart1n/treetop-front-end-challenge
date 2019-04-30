import { API_URL, SEARCH_PARAM, API_KEY } from "./constants";

export const handleSearch = async searchInput => {
  console.log(searchInput);

  const parsedSearchTerm = searchInput.split(" ").join("+");
  console.log(parsedSearchTerm);
  const response = await fetch(
    `${API_URL}${SEARCH_PARAM}${parsedSearchTerm}&api_key=${API_KEY}`
  );
  return await response.json();
};
