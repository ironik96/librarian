import React from "react";
import booksStore from "../stores/booksStore";

const SearchBar = () => {
  const books = booksStore;
  const handleChange = (event) => books.filterBooks(event.target.value);

  return (
    <input
      type="text"
      className="search-input"
      placeholder="🔎	Search Books"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
