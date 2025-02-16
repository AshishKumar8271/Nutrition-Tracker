import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { incQuantity, decQuantity, editItem, deleteItem } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <SwiperSlide key={item.id}>
            <div className="border-[2px] p-4 border-blue-400 rounded-md mx-2">
                <h2 className="text-xl font-bold mb-4">{item.name}</h2>
                <p>Calories: {item.calories}</p>
                <p>Protein: {item.protein}g</p>
                <p>Carbs: {item.carbs}g</p>
                <p>Fat: {item.fat}g</p>
                <div className="flex gap-4 items-center mt-2">
                    <button className="w-full bg-green-500 shadow-md text-white text-2xl font-bold p-1 rounded-md hover:bg-green-400 transition-all" onClick={() => dispatch(incQuantity(item.id))}>
                        +
                    </button>
                    <span>{item.quantity}</span>
                    <button className={`w-full bg-red-500 shadow-md text-white text-2xl font-bold p-1 rounded-md hover:bg-red-400 transition-all ${item.quantity <= 1 && "cursor-not-allowed"}`} onClick={() => dispatch(decQuantity(item.id))} disabled={item.quantity <= 1 ? true : false}>
                        -
                    </button>
                </div>
                <div className='flex gap-6 items-center mt-2'>
                    <button className='w-full flex justify-center items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-all' onClick={() => dispatch(editItem(item.id))}>
                        <span><FiEdit /></span>
                        Edit
                    </button>

                    <button className='w-full flex justify-center items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition-all' onClick={() => dispatch(deleteItem(item.id))}>
                        <span><MdDelete /></span>
                        Delete
                    </button>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default ItemCard