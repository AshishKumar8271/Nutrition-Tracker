import React from 'react';
import { useSelector } from 'react-redux';

const Nutritions = () => {
  const { totalCalories, totalProtein, totalCarbs, totalFat } = useSelector((state) => state.nutrition);
  return (
    <div className='text-center mt-6 '>
      <p className='text-xl font-semibold'>Total Calories: {totalCalories}</p>
      <p className='text-xl font-semibold'>Total Protein: {totalProtein}g</p>
      <p className='text-xl font-semibold'>Total Carbs: {totalCarbs}g</p>
      <p className='text-xl font-semibold'>Total Fat: {totalFat}g</p>
    </div>
  )
}

export default Nutritions