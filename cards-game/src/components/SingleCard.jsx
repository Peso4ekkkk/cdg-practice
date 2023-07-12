import React from "react";
import "../index.css";
export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}></div>
      <div className="border-[1px] border-white w-[96px] h-[96px]">
        <div
          className="back bg-lavender pl-[2.75rem] pb-[2.75rem] relative "
          onClick={handleClick}
        >
          ?
        </div>
        <img
          className="front bg-lavender block w-[100%] relative"
          src={card.img}
          alt="card front"
        />
      </div>
    </div>
  );
}
