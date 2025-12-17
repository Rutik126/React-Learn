import React from 'react'
import { Menu } from 'lucide-react';

const navbar = () => {
  return (
    <div className='flex justify-between p-8'>
        <button className='text-orange-600 dark:text-sky-400/100" uppercase oklch(76.9% 0.188 70.08) text-2xl font-bold '>foodeat</button>
        <div className='flex gap-8'>
            <button className='underline underline-offset-4 font-bold text-gray-900 uppercase'>home</button>
            <button className='font-bold text-shadow-gray-900 uppercase'>menu</button>
            <button className='font-bold text-shadow-gray-900 uppercase'>about</button>
            <button className='font-bold text-shadow-gray-900 uppercase'><Menu/></button>
        </div>
    </div>
  ) 
}

export default navbar