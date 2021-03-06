import booksStore from "../stores/booksStore";
import { observer } from "mobx-react";
import BookItem from "./BookItem";

const BooksList = () => {
  const books = booksStore.filteredBooks.map((book) => (
    <BookItem book={book} key={book._id} />
  ));

  return <div className="books-content">{books}</div>;
};

export default observer(BooksList);
