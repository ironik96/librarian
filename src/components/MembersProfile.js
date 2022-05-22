import { Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import booksStore from "../stores/booksStore";

const MembersProfile = ({ isOpen, closeModal, member }) => {
  const borrowedBooks = booksStore.books
    .filter((book) => member.currentlyBorrowedBooks.includes(book._id))
    .map((book) => <div key={book._id}>{book.title}</div>);

  return (
    <Modal centered show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {member.firstName} {member.lastName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Membership: {member.membership}</div>
        <div>Borrowed Books: {borrowedBooks}</div>
      </Modal.Body>
    </Modal>
  );
};

export default observer(MembersProfile);
