import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";
import { Link } from "react-router-dom";
import { useState } from "react";

const MEMBERSHIPS = ["silver", "gold", "platinum"];
const NUMBER_OF_ALLOWED_BOOKS = [2, 3, 5];

const BookDetails = () => {
  const { bookSlug } = useParams();
  const book = booksStore.books.find((element) => element.slug === bookSlug);
  if (!book) return <p>Loading ...</p>;

  const members = membersStore.members;

  const borrowedBy = members
    .filter((member) => book.borrowedBy.includes(member._id))
    .map((member) => (
      <Link to={`/members/${member.slug}`} key={member._id}>
        {member.firstName}
      </Link>
    ));

  const membersNames = membersStore.members.map((member) => (
    <option key={member._id} value={member._id}>
      {`${member.firstName} ${member.lastName}`}
    </option>
  ));

  const [borrowerID, setBorrower] = useState(membersStore.members[0]._id);

  const handleChange = (event) => {
    setBorrower(event.target.value);
  };

  const handleBorrow = () => {
    const wantsToBorrow = membersStore.members.find(
      (member) => member._id === borrowerID
    );
    const numOfBorrowedBooks = wantsToBorrow.currentlyBorrowedBooks.length;
    const indexOfMembership = MEMBERSHIPS.indexOf(wantsToBorrow.membership);
    const numOfAllowedBooks = NUMBER_OF_ALLOWED_BOOKS[indexOfMembership];

    if (numOfBorrowedBooks === numOfAllowedBooks) {
      console.log("not allowed to borrow");
    } else {
      console.log("allowed to borrow");
      const URL = `https://library-borrow-system.herokuapp.com/api/books/${book._id}/borrow/${wantsToBorrow._id}`;
      membersStore.modifyMembersBorrowingList(URL);
      //booksStore.modifyBooksBorrowedList(URL);
      //set book as unavailable
      //save member's id in the borrowedby list
      //save the book's id in the borrowedbooks list
    }
  };

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
          <select onChange={handleChange}>{membersNames}</select>
          <button
            onClick={handleBorrow}
            className="add-borrower"
            name="fullName"
          >
            Add a borrower
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(BookDetails);
