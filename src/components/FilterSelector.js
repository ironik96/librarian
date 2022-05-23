import { allGenres } from "./Genres";
import Form from "react-bootstrap/Form";
import booksStore from "../stores/booksStore";

const FilterSelector = ({ isBooks }) => {
  if (!isBooks) return <div></div>;

  const genres = allGenres.map((genre) => (
    <option className="one-borrower" key={genre} value={genre}>
      {genre}
    </option>
  ));

  const handleChange = (event) => {
    booksStore.setFilter(event.target.value);
  };
  return (
    <div className="filter-selector">
      <Form.Select onChange={handleChange}>
        <option value="" selected>
          All
        </option>
        {genres}
      </Form.Select>
    </div>
  );
};

export default FilterSelector;
