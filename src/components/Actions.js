import { useLocation } from "react-router-dom";
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";

const BOOKS_PATH = "/";
const MEMBERS_PATH = "/members";

const Actions = () => {
  const routeLocation = useLocation();
  const isBooks = routeLocation.pathname === BOOKS_PATH;
  const isMembers = routeLocation.pathname === MEMBERS_PATH;
  return (
    <div className="actions">
      <div className="my-logo">Readable windows</div>
      <SearchBar isBooks={isBooks} isMembers={isMembers} />
      <AddButton isBooks={isBooks} />
    </div>
  );
};

export default Actions;
