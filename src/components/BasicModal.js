import { Modal } from "react-bootstrap";

function BasicModal({ isOpen, closeModal, title, body }) {
  console.log("🚀 ~ file: BasicModal.js ~ line 4 ~ BasicModal ~ body", body);
  console.log("🚀 ~ file: BasicModal.js ~ line 4 ~ BasicModal ~ title", title);
  return (
    <Modal centered show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>
    </Modal>
  );
}
export default BasicModal;
