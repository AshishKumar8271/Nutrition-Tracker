import React from 'react'
import ItemData from './Components/ItemData'
import ItemsList from './Components/ItemsList';
import Nutritions from './Components/Nutritions';

function App() {
  return (
    <div className='bg-green-200 min-h-screen min-w-full flex justify-center items-center flex-col'>
      <div className=' bg-white m-10 w-[95%] max-w-4xl p-4 rounded-md shadow-lg'>
        <h1 className='text-center text-2xl'>StayFit Nutrition Calculator</h1>
        <ItemData />
        <ItemsList />
        <Nutritions />
      </div>
    </div>
  )
}

export default App