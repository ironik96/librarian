import { useState } from "react";
import AddBookModal from "./AddBookModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <button className="add-button">
      <img
        className="add-button-img"
        onClick={openModal}
        src="/icons/plus.png"
        alt=""
      />
      <AddBookModal isOpen={isOpen} closeModal={closeModal} />
    </button>
  );
};

export default AddButton;
