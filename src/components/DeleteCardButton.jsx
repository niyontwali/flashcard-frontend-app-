import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { GET_CARDS } from '../queries/cardQuery';
import { DELETE_CARD } from '../mutations/cardMutations';


const DeleteCardButton = ({cardId}) => {
  const navigate = useNavigate();
  const [ deleteCard ] = useMutation(DELETE_CARD, {
    variables: { id: cardId },
    onCompleted: () => navigate('/dashboard'),
    refetchQueries: [{ query: GET_CARDS }]
  })
  return (
    <div className=''>
      <button className='flex items-center gap-2 py-2 px-10 rounded bg-[#ec735e] hover:bg-[#da4f37] text-white font-bold focus:outline-none my-1' onClick={deleteCard}>
        <FaTrash className='icon' />
        Delete Card
      </button>
    </div>
  )
}

export default DeleteCardButton