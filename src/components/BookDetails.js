import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";
import { Link } from "react-router-dom";

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

  const membersNames = members.map((member) => (
    <option key={member._id} value={member.firstName}>
      {member.firstName}
    </option>
  ));

  const handleSelector = () => {};

  const handleBorrowing = () => {};

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
          <select value={members[0].firstName} onChange={handleSelector}>
            {membersNames}
          </select>
          <button className="add-borrower" onClick={handleBorrowing}>
            Add a borrower
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(BookDetails);
