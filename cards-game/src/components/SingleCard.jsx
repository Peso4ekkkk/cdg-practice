import React from "react";
import "../index.css";
export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  const wrapperClassname =
    "border-[1px] border-white w-[96px] h-[96px] mb-9 bg-lavender relative cursor-pointer " +
    (flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0)]");

  const coverClassname =
    "absolute w-full h-full flex items-center justify-center " +
    (flipped ? "opacity-0" : "opacity-100");
  const contentClassname =
    "absolute object-cover " + (flipped ? "opacity-100" : "opacity-0");

  return (
    <div className={wrapperClassname} onClick={handleClick}>
      <div className={coverClassname}>?</div>
      <img className={contentClassname} src={card.img} alt="card front" />
    </div>
  );
}
