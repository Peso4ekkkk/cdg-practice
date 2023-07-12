import { useState } from "react";
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
  bear,
  cow,
  elephant,
  kangaroo,
  mouse,
  snail,
  squirrel,
  zebra,
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiceOne] = useState(null);
  const [choiseTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ img: card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiseOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  console.log("choiseOne ", choiseOne);
  console.log("choiseTwo ", choiseTwo);

  return (
    <div className="App" class="bg-black  h-[100vh]">
      <h1 class="flex justify-center items-cener text-[2.5rem]  text-white">
        Find a pair
      </h1>
      <div class="flex justify-center items-center">
        <button
          onClick={shuffleCards}
          class="  border-[2px] rounded-[10px] bg-none cursor-pointer border-white text-lavender "
        >
          New game
        </button>
      </div>
      <div className="card-grid" class="mt-[40px] grid grid-cols-4 gap-1">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
