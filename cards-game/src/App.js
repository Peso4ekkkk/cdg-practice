import { useEffect, useState } from "react";
import "./index.css";
import SingleCard from "./components/SingleCard";
import bear from "./image/bear.png";
import cow from "./image/cow.png";
import elephant from "./image/elephant.png";
import kangaroo from "./image/kangaroo.png";
import mouse from "./image/mouse.png";
import snail from "./image/snail.png";
import squirrel from "./image/squirrel.png";
import zebra from "./image/zebra.png";

const cardImages = [
  { bear, matched: false },
  { cow, matched: false },
  { elephant, matched: false },
  { kangaroo, matched: false },
  { mouse, matched: false },
  { snail, matched: false },
  { squirrel, matched: false },
  { zebra, matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ img: card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.img === choiceTwo.img) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.img === choiceOne.img) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App bg-greyDark  h-[100vh] w-[100%]">
      <h1 className="flex justify-center items-cener text-[2.5rem]  text-white">
        Find a pair
      </h1>
      <div className="flex justify-center items-center">
        <button
          onClick={shuffleCards}
          className="  border-[2px] rounded-[10px] bg-none cursor-pointer border-white text-lavender "
        >
          New game
        </button>
      </div>
      <div className="card-grid mt-[50px] ml-[450px] grid grid-cols-4 gap-0.5 w-[60%]">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
