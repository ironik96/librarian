import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import booksStore from "../stores/booksStore";
import Genres from "./Genres.js";

function AddBookModal(props) {
  const emptyBook = {
    author: "",
    title: "",
    genres: [],
    available: true,
    image: "/icons/books.png",
  };
  const [book, setBook] = useState(emptyBook);

  const handleChange = (event) => {
    event.target.name === "available"
      ? setBook({ ...book, [event.target.name]: event.target.value === "on" })
      : setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleGenres = (event) => {
    const genres = book.genres;
    const genre = event.target.id;
    event.target.checked
      ? setBook({ ...book, ["genres"]: [...genres, genre] })
      : setBook({ ...book, ["genres"]: genres.filter((g) => g != genre) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    booksStore.addBook(book);
    props.closeModal();
    setBook(emptyBook);
  };

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add a book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Book author</InputGroup.Text>
            <Form.Control type="text" name="author" onChange={handleChange} />
          </InputGroup>
          <br />

          <InputGroup>
            <InputGroup.Text>Book title</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <br />

          <InputGroup.Text>Book genre</InputGroup.Text>
          <Genres handleGenres={handleGenres} />
          <br />
          <br />

          <InputGroup>
            <InputGroup.Text>Book cover</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddBookModal;
