import { Form } from "react-bootstrap";

const allGenres = [
  "Action",
  "Fantasy",
  "Sci-Fi",
  "Romance",
  "Fiction",
  "Self-Help",
  "Thriller",
  "Suspense",
  "Biography",
  "Business",
  "Entrepreneurship",
  "Crime",
  "Mystery",
];
const Genres = ({ handleGenres }) => {
  const renderAllGenres = allGenres.map((genre) => (
    <Form.Check
      inline
      label={genre}
      name="genres"
      type="checkbox"
      onChange={handleGenres}
      key={genre}
      id={genre}
    />
  ));
  return <>{renderAllGenres}</>;
};

export default Genres;
export { allGenres };
