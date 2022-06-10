import { useState } from "react";
import '../flashcard.css'

const FlashCard = ({card}) => {
  
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip)
  }
  return (
    <div 
    className={`card shadow-lg bg-[#ebedf0] ${flip ? 'flip' : ''}`} 
    onClick={handleClick}
    >
      <div className="front">
        <h1 className="text-lg font-bold">{card.question}</h1>
        <div className="flashcard-options">
          {card.description}
        </div>
      </div>
      <div className="back">
          {card.answer}
      </div>
    </div>
  )
} 

export default FlashCard