import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

const URL = "https://library-borrow-system.herokuapp.com/api/books";

class BooksStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchBooks();
  }

  books = [];

  fetchBooks = async () => {
    try {
      const response = await axios.get(URL);
      runInAction(() => {
        this.books = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  };
}
const booksStore = new BooksStore();
export default booksStore;
