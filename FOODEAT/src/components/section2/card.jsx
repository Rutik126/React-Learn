import React from 'react'
import { CirclePlus } from 'lucide-react';
import { Star } from 'lucide-react';

const card = (props) => {
  return (

    <div className='w-80 h-100 bg-gray-200 rounded-xl m-16 relative '>
      <img className='w-80 h-80 flex justify-center rounded-t-xl absolute -top-30' src={props.itemImage} alt="" srcset="" />
      <div className='pl-5 absolute py-50'>
        <div className='flex align-middle gap-2 mt-4 text-indigo-400'><Star/>{props.rating}</div>
        <h2 className='text-2xl font-bold'>{props.itemName}</h2>
        <p className='font-medium'>Lorem ipsum dolor sit amet.</p>
        <div className='flex pt-8 justify-between'>
          <p className='text-2xl font-bold'>{props.itemPrice}$</p>
          <button className='bg-amber-700 border-b-amber-900 rounded-full h-12 w-12 flex justify-center items-center'> <CirclePlus /></button>
        </div>
      </div>
    </div>
  )
}

export default card