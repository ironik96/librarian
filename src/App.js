import "./App.css";
import Navigator from "./components/Navigator";
import BooksList from "./components/BooksList";
import Actions from "./components/Actions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Navigator />
          <div className="main-page">
            <Actions />
            <BooksList />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
