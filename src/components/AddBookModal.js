import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import booksStore from "../stores/booksStore";
import Genres from "./Genres.js";

function AddBookModal(props) {
  const [book, setBook] = useState({
    author: "",
    title: "",
    genres: [],
    available: false,
    image: "",
  });

  //array of genres, render as checkboxes, user selects from them, OR give user multiple fields to add genres as text
  //available: checkbox. or options

  const handleChange = (event) => {
    if (event.target.name === "available") {
      console.log(event.target.value);
      setBook({ ...book, [event.target.name]: event.target.value === "on" });
    } else {
      console.log("else part", event.target.id);
      setBook({ ...book, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(book);
    //booksStore.addBook(book);
    props.closeModal();
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

          {/* <InputGroup>
           
            <Form.Control name="genres" onChange={handleChange} /> */}
          <InputGroup.Text>Book genre</InputGroup.Text>
          <Genres handleChange={handleChange} />
          <br />
          {/* </InputGroup> */}
          <br />

          <InputGroup>
            <InputGroup.Text>Book cover</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          <br />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Available"
              name="available"
              onChange={handleChange}
            />
          </Form.Group>
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
