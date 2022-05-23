import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

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
      runInAction(() => {
        this.members = response.data;
      });
    } catch (error) {
      console.error(error);
    }
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
  modifyMembersBorrowingList = async (myURL) => {
    try {
      const response = await axios.put(myURL);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}
const membersStore = new MembersStore();
export default membersStore;
