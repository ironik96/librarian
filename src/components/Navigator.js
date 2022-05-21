import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className="side-nav">
      <NavLink className="nav-btn" to="/">
        <img
          className="nav-btn-icon"
          src="icons/books.png"
          alt="books button"
        />
        Books
      </NavLink>
      <NavLink className="nav-btn" to="/members">
        <img
          className="nav-btn-icon"
          src="icons/members.png"
          alt="members button"
        />
        Members
      </NavLink>
    </nav>
  );
};

export default Navigator;
