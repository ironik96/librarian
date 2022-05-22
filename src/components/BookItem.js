import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
    <Link to={`/books/${book.slug}`}>
      <div className="book-card">
        <img className="book-img" src={book.image} alt={book.title} />
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>
    </Link>
  );
};

export default BookItem;
