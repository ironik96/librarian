import MembersProfile from "./MembersProfile";
import { useState } from "react";

const MemberItem = ({ member }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button className="member-item" onClick={openModal}>
        <div className={"membership " + member.membership}></div>
        <div className="member-name">
          {member.firstName} {member.lastName}
        </div>
      </button>
      <MembersProfile isOpen={isOpen} closeModal={closeModal} member={member} />
    </>
  );
};

export default MemberItem;
