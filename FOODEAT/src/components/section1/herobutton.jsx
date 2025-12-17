import React from 'react'

const herobutton = () => {
  return (
    <div className='flex w-100 justify-evenly'>
        <button className='py-2 px-8 text-white border-orange-600 border-2 font-extrabold rounded-4xl bg-amber-600'>Food Menu</button>
        <button className='py-2 px-8 text-white font-extrabold rounded-4xl bg-neutral-500'>Book a Table</button>
    </div>
  )
}

export default herobutton