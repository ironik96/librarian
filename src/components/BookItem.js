import { useState } from "react";
import BookDetailsModal from "./BookDetailsModal";

const BookItem = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button className="book-card" onClick={openModal}>
        <img className="book-img" src={book.image} alt={book.title} />
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </button>
      <BookDetailsModal isOpen={isOpen} closeModal={closeModal} book={book} />
    </>
  );
};

export default BookItem;
