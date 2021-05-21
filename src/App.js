import "./App.css";
import Navbar from "./components/Navbar";
import ChoiceCard from "./components/ChoiceCard";
import { useState } from "react";

function App() {
  const [words, setWords] = useState(["hello", "goodbye", "joshisagay"]);
  const [darkMode, setDarkMode] = useState(true);

  const changeWords = () => {
    setWords(["bonjour", ...words]);
    setDarkMode(!darkMode);
  };
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div className={("App", darkMode ? "dark" : "light")}>
      <Navbar />
      <header className="App-header">
        <button onClick={changeWords}>arist</button>
        <div className="Choice-row">
          <ChoiceCard
            position="left"
            imgSrc="https://static.wikia.nocookie.net/runescape2/images/5/56/Frog_%28NPC%29.png/revision/latest?cb=20160531202106"
          />
          <ChoiceCard
            position="right"
            imgSrc="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
