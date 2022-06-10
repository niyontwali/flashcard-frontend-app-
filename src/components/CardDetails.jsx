import { FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa'

const CardDetails = ({card}) => {
  return (
    <>
      <h5 className='mt-5'>Card Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className="icon" />
          {card.question}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className="icon" />
          {card.description}
        </li>
        <li className='list-group-item'>
          <FaPhone className="icon" />
          {card.answer}
        </li>
      </ul>
    </>
  )     
}

export default CardDetails