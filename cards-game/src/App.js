import { useState } from 'react'
import './index.css'
import SingleCard from './components/Singlecard'
const cardImages =[
{"src":"/cards-game/src/image/bear.png"},
{"src":"/cards-game/src/image/elephant.png"},
{"src":"/cards-game/src/image/kangaroo.png"},
{"src":"/cards-game/src/image/mouse.png"},
{"src":"/cards-game/src/image/snail.png"},
{"src":"/cards-game/src/image/squirrel.png"},
{"src":"/cards-game/src/image/zebra.png"},
{"src":"/cards-game/src/image/cow.png"}
]

function App() {
  const [cards,setCards]=useState([])
  const [turns,setTurns]=useState(0)
  const shuffleCards =() =>{
    const shuffledCards =[...cardImages, ...cardImages]
    .sort(() =>Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards,turns)
  return (
    <div className="App" class="bg-black  h-[100vh]">
      <h1 class="flex justify-center items-cener text-[2.5rem]  text-white">Find a pair</h1>
      <div class="flex justify-center items-center">
      <button onClick={shuffleCards} class="  border-[2px] rounded-[10px] bg-none cursor-pointer border-white text-lavender ">New game</button>
      </div>
      <div className='card-grid' class="mt-[40px] grid grid-cols-4 gap-1">
        {cards.map(card=>(
          <SingleCard key={card.id} card ={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
