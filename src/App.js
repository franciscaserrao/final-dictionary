import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>{" "}
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/franciscaserrao"
            target="_blank"
            rel="noreferrer"
          >
            Francisca Serrão
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/franciscaserrao/final-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://main--final-dictionary-shecodes-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
