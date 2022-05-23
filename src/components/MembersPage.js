import { observer } from "mobx-react";
import membersStore from "../stores/membersStore";
import MemberItem from "./MemberItem";

const MembersPage = () => {
  const members = membersStore.filteredMembers.map((member) => (
    <MemberItem key={member._id} member={member} />
  ));
  return <div className="members-content">{members}</div>;
};

export default observer(MembersPage);
