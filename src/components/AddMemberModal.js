import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import membersStore from "../stores/membersStore";
const MEMBERSHIPS = ["silver", "gold", "platinum"];

function AddMemberModal(props) {
  const newMember = {
    firstName: "",
    lastName: "",
    membership: MEMBERSHIPS[0],
  };
  const [member, setMember] = useState(newMember);

  const membershipOptions = MEMBERSHIPS.map((membership) => (
    <option key={membership} value={membership}>
      {membership}
    </option>
  ));

  const handleChange = (event) =>
    setMember({ ...member, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    membersStore.addMembers(member);
    props.closeModal();
    setMember(newMember);
  };

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add a member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>First Name</InputGroup.Text>
            <Form.Control
              type="text"
              name="firstName"
              onChange={handleChange}
              value={member.firstName}
            />
          </InputGroup>
          <br />

          <InputGroup>
            <InputGroup.Text>Last Name</InputGroup.Text>
            <Form.Control
              type="text"
              name="lastName"
              onChange={handleChange}
              value={member.lastName}
            />
          </InputGroup>
          <br />

          <InputGroup>
            <InputGroup.Text>Membership Type</InputGroup.Text>
            <Form.Select
              type="select"
              name="membership"
              onChange={handleChange}
            >
              {membershipOptions}
            </Form.Select>
          </InputGroup>
          <br />

          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add member
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddMemberModal;
