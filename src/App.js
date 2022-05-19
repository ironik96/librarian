import "./App.css";
import Navigator from "./components/Navigator";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="main-page">
            <Navigator />
            <BooksList />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
