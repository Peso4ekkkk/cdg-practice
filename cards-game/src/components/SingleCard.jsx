import React from "react";
import "../index.css";
export default function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card" class="relative" key={card.id}>
      <div class="border-[2px] border-white">
        <img className="front bg-lavender" src={card.img} alt="card front" />
        <div className="back" onClick={handleClick}>
          ?
        </div>
      </div>
    </div>
  );
}
