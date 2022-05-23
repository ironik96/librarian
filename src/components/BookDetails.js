import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const NUMBER_OF_ALLOWED_BOOKS = { silver: 2, gold: 3, platinum: 5 };

const BookDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const { bookSlug } = useParams();

  const book = booksStore.books.find((element) => element.slug === bookSlug);
  const members = membersStore.members;
  const [borrowerID, setBorrower] = useState(members[0]?._id);
  if (!book) return <p>Loading ...</p>;

  const borrowedBy = members
    .filter((member) => book.borrowedBy.includes(member._id))
    .map((member) => (
      <Link to={`/members/${member.slug}`} key={member._id}>
        {`• ${member.firstName}  ${member.lastName}`}
      </Link>
    ));

  const membersNames = members.map((member) => (
    <option className="one-borrower" key={member._id} value={member._id}>
      {`${member.firstName} ${member.lastName}`}
    </option>
  ));

  const handleChange = (event) => {
    setBorrower(event.target.value);
  };

  const handleBorrow = () => {
    const wantsToBorrow = members.find((member) => member._id === borrowerID);
    const numOfBorrowedBooks = wantsToBorrow.currentlyBorrowedBooks.length;
    const numOfAllowedBooks = NUMBER_OF_ALLOWED_BOOKS[wantsToBorrow.membership];

    if (numOfBorrowedBooks === numOfAllowedBooks) {
      console.log("not allowed to borrow");
      openModal();
    } else {
      console.log("allowed to borrow");
      booksStore.borrowBook(book._id, wantsToBorrow._id);
    }
  };
  const handleReturn = () => membersStore.returnBook(book._id);

  const button = book.available ? (
    <BorrowButton handleBorrow={handleBorrow} />
  ) : (
    <ReturnButton handleReturn={handleReturn} />
  );

  return (
    <div className="book-details-container">
      <img className="book-img-inside" src={book.image} alt={book.title} />
      <div className="book-info">
        <div className="book-title-inside">{book.title}</div>
        <div className="book-details">
          <div className="one-field">
            <div className="title-in-bold">Author:</div>
            <div>{book.author}</div>
          </div>

          <div className="one-field">
            <div className="title-in-bold">Genre: </div>
            <div>{book.genres}</div>
          </div>

          <div className="one-field">
            <div className="title-in-bold">Availability: </div>
            <div>{book.available ? " ✔ Available" : "✘ Not available"}</div>
          </div>

          <div className="borrowed-by-field">
            <div className="title-in-bold">Borrowed by: </div>
            <div className="borrowers">{borrowedBy}</div>
          </div>

          <div className="to-borrow">
            {book.available && (
              <Form.Select onChange={handleChange}>{membersNames}</Form.Select>
            )}
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

const BorrowButton = ({ handleBorrow }) => {
  return (
    <button onClick={handleBorrow} className="add-borrower" name="fullName">
      Add a borrower
    </button>
  );
};
const ReturnButton = ({ handleReturn }) => {
  return (
    <button onClick={handleReturn} className="add-borrower" name="fullName">
      Return Book
    </button>
  );
};
export default observer(BookDetails);
