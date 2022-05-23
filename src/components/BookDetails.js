import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";
import { Link } from "react-router-dom";
import { useState } from "react";

const NUMBER_OF_ALLOWED_BOOKS = { silver: 2, gold: 3, platinum: 5 };

const BookDetails = () => {
  const { bookSlug } = useParams();

  const book = booksStore.books.find((element) => element.slug === bookSlug);
  const members = membersStore.members;
  const [borrowerID, setBorrower] = useState(members[0]?._id);
  if (!book) return <p>Loading ...</p>;

  const selectorClass = book.available ? "" : "hide-select";

  const borrowedBy = members
    .filter((member) => book.borrowedBy.includes(member._id))
    .map((member) => (
      <Link to={`/members/${member.slug}`} key={member._id}>
        {member.firstName}
      </Link>
    ));

  const membersNames = members.map((member) => (
    <option key={member._id} value={member._id}>
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
    } else {
      console.log("allowed to borrow");
      booksStore.modifyBooksBorrowedList(book._id, wantsToBorrow._id);
    }
  };
  const handleReturn = () => {
    const wantsToBorrow = members.find((member) => member._id === borrowerID);
    const numOfBorrowedBooks = wantsToBorrow.currentlyBorrowedBooks.length;
    const numOfAllowedBooks = NUMBER_OF_ALLOWED_BOOKS[wantsToBorrow.membership];

    if (numOfBorrowedBooks === numOfAllowedBooks) {
      console.log("not allowed to borrow");
    } else {
      console.log("allowed to borrow");
      booksStore.modifyBooksBorrowedList(book._id, wantsToBorrow._id);
    }
  };

  const button = book.available ? (
    <BorrowButton handleBorrow={handleBorrow} />
  ) : (
    <ReturnButton handleReturn={handleReturn} />
  );

  return (
    <div className="book-details-container">
      <img className="book-img" src={book.image} alt={book.title} />
      <div className="book-info">
        <div>title: {book.title}</div>
        <div>author: {book.author}</div>
        <div>genre: {book.genres}</div>
        <div>
          availability: {book.available ? "available" : "not available"}
        </div>
        <div className="borrowers">borrowed by: {borrowedBy}</div>
        <div className="to-borrow">
          <select className={selectorClass} onChange={handleChange}>
            {membersNames}
          </select>
          {button}
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
