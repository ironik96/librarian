import "./App.css";
import membersStore from "./stores/membersStore";
import { observer } from "mobx-react";
import MemberItem from "./components/MemberItem";

function App() {
  const members = membersStore.members.map((member) => (
    <MemberItem member={member} key={member._id} />
  ));
  return (
    <div className="App">
      <header className="App-header">{members}</header>
    </div>
  );
}

export default observer(App);
