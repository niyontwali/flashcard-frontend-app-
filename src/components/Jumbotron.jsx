import Btn from './Btn'

const Jumbotron = () => {
  return (
    <div className="mt-[20vh]">
      <div className="bg-[#f3f4f6] max-w-[700px] h-[300px] mx-auto text-center rounded-3xl py-10 shadow-lg">
        <h1 className='text-5xl font-bold text-[#ff5a3c] tracking-wider '>Welcome !</h1>
        <p className='mt-8 text-xl font-bold px-8 leading-8 tracking-wider'>Have fun while testing yourself with some simple questions related the most popular movies</p>
        <div className='mt-10'>
          <Btn />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron