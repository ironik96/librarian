import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

const URL = "https://library-borrow-system.herokuapp.com/api/books";
const getBorrowUrl = (bookId, memberId) =>
  `https://library-borrow-system.herokuapp.com/api/books/${bookId}/borrow/${memberId}`;

class BooksStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchBooks();
  }

  books = [];
  filteredBooks = [];

  setBooks = (newBooks) => {
    this.books = newBooks;
    this.filteredBooks = Array.from(this.books);
  };

  fetchBooks = async () => {
    try {
      const response = await axios.get(URL);
      runInAction(() => {
        this.setBooks(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  addBook = async (book) => {
    try {
      const response = await axios.post(URL, book);
      runInAction(() => this.setBooks([...this.books, response.data]));
    } catch (error) {
      console.error(error);
    }
  };

  filterBooks = (query) => {
    this.filteredBooks = this.books.filter((book) => {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genres.some((genre) =>
          genre.toLowerCase().includes(query.toLowerCase())
        )
      );
    });
  };

  getBook = (bookId) => this.books.find((book) => book._id === bookId);

  getBorrowerId = (bookId) => {
    const borrowers = this.getBook(bookId).borrowedBy;
    return borrowers[borrowers.length - 1];
  };

  modifyBooksBorrowedList = async (bookId, memberId) => {
    try {
      const response = await axios.put(getBorrowUrl(bookId, memberId));
      this.setBooks(
        this.books.map((book) => (book._id === bookId ? response.data : book))
      );
    } catch (error) {
      console.error(error);
    }
  };
}
const booksStore = new BooksStore();
export default booksStore;
