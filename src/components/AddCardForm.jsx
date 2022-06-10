import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CARD } from '../mutations/cardMutations';
import { GET_CARDS } from '../queries/cardQuery';


const AddCardForm = ({ card }) => {
  const [question, setQuestion] = useState('')
  const [description, setDescription] = useState('')
  const [answer, setAnswer] = useState('')

  const [createCard] = useMutation(ADD_CARD, {
    variables: { question, description, answer },
    update(cache, { data: { createCard } }) {
      const { allCards } = cache.readQuery({ query: GET_CARDS });
      cache.writeQuery({
        query: GET_CARDS,
        data: { allCards: [...allCards, createCard] } 
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question === '' || description === '' || answer === '') {
      return alert('Please fill in all fields')
    }
    createCard(question, description, answer);
    setQuestion('')
    setDescription('')
    setAnswer('')
  }

  return (
    <div>
      <h1 className='mb-2 text-center font-bold text-2xl'>Add a Quiz Card</h1>
      <hr className='mb-8 bg-[#efd6d1] h-[2px]' />
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className="font-semibold">Question</label>
        <textarea className='block border border-gray-400 w-full mt-2 p-2 rounded mb-4 outline-[#efd6d1]' id="question" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
        <label className="font-semibold">Description</label>
        <textarea className='block border border-gray-400 mt-2 w-full p-2 rounded mb-4 outline-[#efd6d1]' id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <label className="font-semibold">Answer</label>
        <textarea className='block border border-gray-400 mt-2 w-full p-2 rounded mb-4 outline-[#efd6d1]' id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
      </div>
      <button type='submit' className="py-2 px-10 rounded bg-[#ec735e] hover:bg-[#da4f37] text-white font-bold focus:outline-none my-1">Add Quiz</button>
      </form>
    </div>
  )
}

export default AddCardForm