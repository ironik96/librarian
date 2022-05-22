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
    .map((book) => <div key={book._id}>{book.title}</div>);

  return (
    <div>
      <div>
        {member.firstName} {member.lastName}
      </div>
      <div>Membership: {member.membership}</div>
      <div>Borrowed Books: {borrowedBooks}</div>
    </div>
  );
};

export default observer(MembersProfile);
