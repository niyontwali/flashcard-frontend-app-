import { Link } from "react-router-dom"

const QuizCard = ({ card }) => {
  return (
    <div className="bg-[#ebedf0] w-[300px] rounded-lg shadow-lg">
      <div className="flex justify-between p-8">
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">{card.question}</h5>
        </div>
        <div className="mt-2">
        <Link className="py-2 font-semibold px-4 rounded-lg bg-[#efd6d1] hover:bg-[#efaea3] " to={`/card/${card.id}`}>View</Link>
        </div>
      </div>
      <div className="px-8 pb-8">
        <p className="text-md font-bold">Answer: <span className="block font-normal">{card.answer}</span></p>
      </div>
    </div>
  )
}

export default QuizCard