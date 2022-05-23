import { useState } from "react";
import AddBookModal from "./AddBookModal";
import AddMemberModal from "./AddMemberModal";

const AddButton = ({ isBooks, isMembers }) => {
  if (isBooks) return <AddBook />;
  if (isMembers) return <AddMember />;
};

const AddBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <button className="add-button" onClick={openModal}>
        <img className="add-button-img" src="/icons/add-book.png" alt="add" />
      </button>
      <AddBookModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
const AddMember = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <button className="add-button" onClick={openModal}>
        <img className="add-button-img" src="/icons/add-user.png" alt="add" />
      </button>
      <AddMemberModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
