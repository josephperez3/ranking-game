import "./App.scss";
import Navbar from "./components/Navbar";
import ChoiceCard from "./components/ChoiceCard";
import { useState } from "react";

function App() {
  const [words, setWords] = useState(["hello", "goodbye", "joshisagay"]);
  const [darkMode, setDarkMode] = useState(true);
  const [cardsInfo, setCardsInfo] = useState([
    {
      name: "elephant",
      link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      classes: "",
    },
    {
      name: "banana",
      link: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      classes: "",
    },
  ]);

  const changeWords = () => {
    setWords(["bonjour", ...words]);
    setDarkMode(!darkMode);
  };
  const handleSubmit = () => {
    console.log("hello");
  };
  const flipCard = (id) => {
    console.log(id);
    console.log(cardsInfo);
    setCardsInfo(
      cardsInfo.map((cardInfo, idx) => {
        if (idx === id) {
          cardInfo.classes = "flipped";
        }
        return cardInfo;
      })
    );
    setTimeout(() => {
      setCardsInfo(
        cardsInfo.map((cardInfo) => {
          cardInfo.classes = "";
          return cardInfo;
        })
      );
    }, 2000);
  };

  // fix navbar (add more, make grid better)
  // make currenturl variable, onclick log choice, animate, and setup new urls
  return (
    <div className={("App", darkMode ? "dark" : "light")}>
      <Navbar />
      <header className="App-header">
        <button onClick={changeWords}>arist</button>
        <div className="Choice-row">
          {cardsInfo.map((cardInfo, idx) => (
            <ChoiceCard
              key={idx}
              id={idx}
              classes={cardInfo.classes}
              imgSrc={cardInfo.link}
              flip={flipCard}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
