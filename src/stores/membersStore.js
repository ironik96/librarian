import axios from "axios";
import { makeAutoObservable } from "mobx";

const URL = "https://library-borrow-system.herokuapp.com/api/members";

class MembersStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchMembers();
  }

  members = [];

  fetchMembers = async () => {
    try {
      const response = await axios.get(URL);
      this.members = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  addMembers = async () => {};
}
const membersStore = new MembersStore();
export default membersStore;
