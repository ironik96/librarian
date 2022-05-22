import "./App.css";
import Navigator from "./components/Navigator";
import BooksList from "./components/BooksList";
import Actions from "./components/Actions";
import { Route, Routes } from "react-router-dom";
import MembersList from "./components/MembersList";

function App() {
  return (
    <div className="container">
      <Navigator />
      <div className="main-page">
        <Actions />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/members" element={<MembersList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
