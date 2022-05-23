import { Modal } from "react-bootstrap";

function BasicModal({ isOpen, closeModal, title, body }) {
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
