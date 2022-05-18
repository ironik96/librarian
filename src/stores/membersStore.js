import axios from "axios";
import { makeAutoObservable } from "mobx";

const URL = "https://library-borrow-system.herokuapp.com/api/members";

class MembersStore {
  constructor() {
    makeAutoObservable(this);
    // this.fetchMembers();
  }

  members = [
    {
      _id: "628514d5b8273a86534c95b8",
      firstName: "Aziz",
      lastName: "AlSaffar",
      membership: "gold",
      currentlyBorrowedBooks: [],
      slug: "aziz-alsaffar",
    },
    {
      _id: "6285150fb8273a86534c95bb",
      firstName: "Laila",
      lastName: "AlKandery",
      membership: "platinum",
      currentlyBorrowedBooks: ["62851414b8273a86534c959d"],
      slug: "laila-alkandery",
    },
  ];

  fetchMembers = async () => {
    try {
      const response = await axios.get(URL);
      this.members = response.data;
    } catch (error) {
      console.error(error);
    }
  };
}
const membersStore = new MembersStore();
export default membersStore;
