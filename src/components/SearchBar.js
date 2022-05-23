import React from "react";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";

const SearchBar = ({ isBooks, isMembers }) => {
  if (isBooks) return <BooksSearch />;
  if (isMembers) return <MembersSearch />;
};

const BooksSearch = () => {
  const handleChange = (event) => booksStore.filterBooks(event.target.value);
  return (
    <input
      type="text"
      className="search-input"
      placeholder="🔎	Search Books"
      onChange={handleChange}
    />
  );
};

const MembersSearch = () => {
  const handleChange = (event) =>
    membersStore.filterMembers(event.target.value);
  return (
    <input
      type="text"
      className="search-input"
      placeholder="🔎	Search Members"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
