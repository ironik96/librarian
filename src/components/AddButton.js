import { useState } from "react";
import AddBookModal from "./AddBookModal";
import AddMemberModal from "./AddMemberModal";

const AddButton = ({ isBooks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const imgSrc = isBooks ? "/icons/add-book.png" : "/icons/add-user.png";
  const Modal = isBooks ? (
    <AddBookModal isOpen={isOpen} closeModal={closeModal} />
  ) : (
    <AddMemberModal isOpen={isOpen} closeModal={closeModal} />
  );
  return (
    <>
      <button className="add-button" onClick={openModal}>
        <img className="add-button-img" src={imgSrc} alt="add" />
      </button>
      {Modal}
    </>
  );
};

export default AddButton;
