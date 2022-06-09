import { useState } from 'react';
import FlashCard from "./FlashCard"

const DATA = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'It is a javascript frontend library',
    options: [
      'Java library',
      'Used to make backend',
      'It is a tool for drawing',
      'none of the above'
    ]
  },
  {
    id: 2,
    question: 'What is GraphQL?',
    answer: 'It is a framework used to build backend api and its flexible',
    options: [
      'Javascript library',
      'Used to make backend api like node',
      'It is a framework used to build backend api and its flexible '
    ]
  },
  {
    id: 3,
    question: 'What is Next?',
    answer: 'It is a react frontend development framework',
    options: [
      'It works the same as Figma',
      'It is a react frontend development framework',
      'Used for mobile designs'
    ]
  }
]

const FlashCardList = () => {
  const [ flashcards, setFlashcards ] = useState(DATA)
  return (
    <div>
      <FlashCard flashcards={flashcards}/>
    </div>
  )
}

export default FlashCardList