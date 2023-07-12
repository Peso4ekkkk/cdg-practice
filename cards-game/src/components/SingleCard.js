import React from 'react'
import './index.css'
export default function SingleCard({card, handleChoice}) {

    const handleClick=()=>{
        handleChoice(card )
    }


    return (
      <div className='card' class="relative" key={card.id}> 
              <div class="block border-[2px] border-white w-[100%]">
                <img className='front' 
                src={card.src} 
                alt='card front'
                />
                <img className='back' 
                src="" onClick={handleClick} 
                alt='card back'
                />
              </div>
      </div>
    )
  }
