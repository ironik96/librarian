const BookItem = ({ book }) => {
  return (
    <div className="book-card">
      <img className="book-img" src={book.image} alt={book.title} />
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>
  );
};

export default BookItem;
