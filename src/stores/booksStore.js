import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

const URL = "https://library-borrow-system.herokuapp.com/api/books";

class BooksStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchBooks();
  }

  books = [];
  filteredBooks = [];

  fetchBooks = async () => {
    try {
      const response = await axios.get(URL);
      runInAction(() => {
        this.books = response.data;
        this.filteredBooks = Array.from(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  addBook = async (book) => {
    this.books.push(book);
    try {
      await axios.post(URL, book);
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
}
const booksStore = new BooksStore();
export default booksStore;
