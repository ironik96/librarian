import React from "react";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";

const SearchBar = ({ isBooks }) => {
  const books = booksStore;
  const members = membersStore;
  const handleChange = (event) => {
    isBooks
      ? books.filterBooks(event.target.value)
      : books.filterBooks(event.target.value);
    //members.filterMembers(event.target.value);
  };
  const searchPlaceholder = isBooks ? "🔎	Search Books" : "🔎	Search Members";

  return (
    <input
      type="text"
      className="search-input"
      placeholder={searchPlaceholder}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
