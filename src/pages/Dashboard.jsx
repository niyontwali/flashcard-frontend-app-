import React from 'react'
import AddCardForm from '../components/AddCardForm'
import Quizes from '../components/Quizes'

const Dashboard = () => {
  return (
    <div className='py-16 h-screen px-36 flex gap-10'>
      <div className='w-3/5'>
        <Quizes />
      </div>
      <div className='w-2/5'>
        <AddCardForm />
      </div>
    </div>
  )
}

export default Dashboard