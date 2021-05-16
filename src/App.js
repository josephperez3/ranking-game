import "./App.css";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [words, setWords] = useState(["hello", "goodbye", "joshisagay"]);
  const [darkMode, setDarkMode] = useState(true);

  const changeWords = () => {
    setWords(["bonjour", ...words]);
    setDarkMode(!darkMode);
  };

  return (
    <div className={("App", darkMode ? "dark" : "light")}>
      <Navbar />
      <header className="App-header">
        <button onClick={changeWords}>arist</button>
        {words.map((word) => {
          return (
            <div>
              <Hello msg={word} />
              <h4>test</h4>
            </div>
          );
        })}
        {/* {[<h1>Gang</h1>, <h1>Chains</h1>, <h1>Drugs</h1>]} */}
        <h1>Gang</h1>
        <h1>Chains</h1>
        <h1>Drugs</h1>
      </header>
    </div>
  );
}

export default App;
