import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { bookSlug } = useParams();
  const book = booksStore.books.find((element) => element.slug === bookSlug);

  const borrowedBy = membersStore.members
    .filter((member) => book.borrowedBy.includes(member._id))
    .map((member) => (
      <Link to={`/members/${member.slug}`} key={member._id}>
        {member.firstName}
      </Link>
    ));

  const membersNames = membersStore.members.map((member) => (
    <option key={member._id} value={member.firstName}>
      {member.firstName}
    </option>
  ));

  return (
    <div className="book-details-container">
      <img src={book.image} alt={book.title} />
      <div className="book-info">
        <div>title: {book.title}</div>
        <div>author: {book.author}</div>
        <div>genre: {book.genres}</div>
        <div>
          availability: {book.available ? "available" : "not available"}
        </div>
        <div className="borrowers">borrowed by: {borrowedBy} </div>
        <div className="to-borrow">
          <select>{membersNames}</select>
          <div className="add-borrower">Add a borrower</div>
        </div>
      </div>
    </div>
  );
};

export default observer(BookDetails);
