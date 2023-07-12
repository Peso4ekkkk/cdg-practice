import React from 'react'
import './index.css'
export default function SingleCard({card}) {
    return (
      <div className='card' class="relative" key={card.id}> 
              <div class="block border-[2px] border-white w-[100%]">
                <img className='front' src={card.src} alt='card front'></img>
                <img className='back' src="" alt='card back'> </img>
              </div>
      </div>
    )
  }
