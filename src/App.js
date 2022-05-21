import "./App.css";
import Navigator from "./components/Navigator";
import BooksList from "./components/BooksList";
import Actions from "./components/Actions";
import { Route, Routes } from "react-router-dom";
import MembersPage from "./components/MembersPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Navigator />
          <div className="main-page">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Actions />
                    <BooksList />
                  </>
                }
              />
              <Route path="/members" element={<MembersPage />} />
            </Routes>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
