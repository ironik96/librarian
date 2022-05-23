import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";

const MembersProfile = () => {
  const { memberSlug } = useParams();
  const member = membersStore.members.find(
    (element) => element.slug === memberSlug
  );

  const borrowedBooks = booksStore.books
    .filter((book) => member.currentlyBorrowedBooks.includes(book._id))
    .map((book) => (
      <div className="borrowed-books" key={book._id}>
        {`• ${book.title}`}
      </div>
    ));

  return (
    <div className="member-details-container">
      <div className="member-header">
        <div className={"membership " + member.membership}></div>
        <div className="member-full-name">
          {member.firstName} {member.lastName}
        </div>
      </div>
      <div className="member-info">
        <div className="one-field">
          <div className="title-in-bold">Membership: </div>
          <div>{member.membership}</div>
        </div>
        <div className="one-field">
          <div className="title-in-bold">Borrowed books: </div>
          <div>{borrowedBooks}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(MembersProfile);
