import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import booksStore from "./booksStore";

const URL = "https://library-borrow-system.herokuapp.com/api/members";

const getReturnUrl = (bookId, memberId) =>
  `https://library-borrow-system.herokuapp.com/api/books/${bookId}/return/${memberId}`;

class MembersStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchMembers();
  }

  members = [];

  fetchMembers = async () => {
    try {
      const response = await axios.get(URL);
      runInAction(() => {
        this.members = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  setMembers = (newMembers) => {
    this.members = [...newMembers];
  };

  addMembers = async (member) => {
    try {
      const response = await axios.post(URL, member);
      runInAction(() => this.members.push(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  getMember = (memberId) =>
    this.members.find((member) => member._id === memberId);

  getBorrower = (bookId) =>
    this.members.find((member) =>
      member.currentlyBorrowedBooks.includes(bookId)
    );

  returnBook = async (bookId) => {
    try {
      const memberId = this.getBorrower(bookId)._id;
      const response = await axios.put(getReturnUrl(bookId, memberId));
      runInAction(() => {
        this.members.map((member) =>
          member._id === memberId ? response.data : member
        );
        booksStore.fetchBooks()
      });
    } catch (error) {
      console.error(error);
    }
  };
}
const membersStore = new MembersStore();
export default membersStore;
