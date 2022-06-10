import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CARD } from '../queries/cardQuery';
import DeleteCardButton from '../components/DeleteCardButton';
import EditCardForm from '../components/EditCardForm';
import {FaBackward} from 'react-icons/fa'
import Spinner from '../components/Spinner';


const Card = () => {
  let { id } = useParams();
  id = parseInt(id)
  const { loading, error, data } = useQuery(GET_CARD, {
    variables: { id }
  });

  if (loading) return <Spinner />
  if (error) return <p className="flex items-center justify-center text-xl text-red-600 font-bold">Something Went Wrong</p>

  return (
    <div className='py-8 px-36'>
      {
        !loading && !error && (
          <div className='bg-[#ebedf0] flex flex-col w-[80%px] p-5'>
            <div className='flex justify-between'>
              <div className='w-1/2'>
                <h1 className='text-lg font-bold mt-3'>Question</h1>
                <p className='bg-white mt-2 py-2 px-6 w-fit rounded-lg'>{ data.oneCard.question }</p>
                <h1 className='font-bold mt-3'>Description</h1>
                <p className='bg-white mt-2 py-2 px-6 w-fit rounded-lg'>{ data.oneCard.description }</p>
                <h1 className='font-bold mt-3'>Answer</h1>
                <p className='bg-white mt-2 py-2 px-6 w-fit rounded-lg'>{ data.oneCard.answer }</p>
              </div>
              <div className='w-1/2'>
                <EditCardForm card={data.oneCard}/>
              </div> 
            </div>
            <div className='flex justify-between mt-2'>
              <DeleteCardButton cardId={data.oneCard.id} />
              <Link to="/dashboard" className='bg-[#ec735e] hover:bg-[#da4f37] text-white flex items-center font-bold px-4 rounded-md'><span className='pr-2'><FaBackward/></span>Back</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Card