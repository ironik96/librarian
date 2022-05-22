import "./App.css";
import Navigator from "./components/Navigator";
import BooksList from "./components/BooksList";
import Actions from "./components/Actions";
import { Route, Routes } from "react-router-dom";
import MembersPage from "./components/MembersPage";
import MembersProfile from "./components/MembersProfile";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className="container">
      <Navigator />
      <div className="main-page">
        <Actions />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/members/:memberSlug" element={<MembersProfile />} />
          <Route path="/books/:bookSlug" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
