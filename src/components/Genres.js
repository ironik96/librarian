import { Modal, Button, InputGroup, Form } from "react-bootstrap";

const allGenres = [
  "Fantasy",
  "Fiction",
  "Crime",
  "Mystery",
  "Business",
  "Entrepreneurship",
  "Biography",
  "Suspense",
  "Sci-Fi",
  "Thriller",
  "Self-Help",
  "Action",
];
const Genres = ({ handleChange }) => {
  const renderAllGenres = allGenres.map((genre) => (
    <Form.Check
      inline
      label={genre}
      name="genres"
      type="checkbox"
      onChange={handleChange}
      key={genre}
      id={genre}
    />
  ));
  return <>{renderAllGenres}</>;
};

export default Genres;
