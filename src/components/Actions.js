import { useLocation } from "react-router-dom";
import AddButton from "./AddButton";
import FilterSelector from "./FilterSelector";
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
      <FilterSelector isBooks={isBooks} />
      <AddButton isBooks={isBooks} isMembers={isMembers} />
    </div>
  );
};

export default Actions;
