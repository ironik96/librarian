import { allGenres } from "./Genres";
import Form from "react-bootstrap/Form";
import booksStore from "../stores/booksStore";
import { useState } from "react";

const FilterSelector = ({ isBooks }) => {
  const [selection, setSelection] = useState("");
  if (!isBooks) return <div></div>;

  const genres = allGenres.map((genre) => (
    <option className="one-borrower" key={genre} value={genre}>
      {genre}
    </option>
  ));

  const handleChange = (event) => {
    setSelection(event.target.value);
    booksStore.setFilter(event.target.value);
  };
  return (
    <div className="filter-selector">
      <Form.Select value={selection} onChange={handleChange}>
        <option value="">All</option>
        {genres}
      </Form.Select>
    </div>
  );
};

export default FilterSelector;
