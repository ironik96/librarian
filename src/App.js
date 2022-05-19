import "./App.css";
import membersStore from "./stores/membersStore";
import { observer } from "mobx-react";
import MemberItem from "./components/MemberItem";
import { useState } from "react";
import AddMemberModal from "./components/AddMemberModal";

function App() {
  const [isAddMemberOpen, setIsOpen] = useState(false);

  const closeAddMemberModal = () => setIsOpen(false);

  const openAddMemberModal = () => setIsOpen(true);

  const members = membersStore.members.map((member) => (
    <MemberItem member={member} key={member._id} />
  ));
  return (
    <div className="App">
      <button onClick={openAddMemberModal}>add a member</button>
      <AddMemberModal
        isAddMemberOpen={isAddMemberOpen}
        closeAddMemberModal={closeAddMemberModal}
      />
      <header className="App-header">{members}</header>
    </div>
  );
}

export default observer(App);
