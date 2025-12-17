import React from 'react'
import Herobutton from './herobutton'

const lefttxt = () => {
  return (
    <div className='w-1/2 h-screen px-8 py-40'>
        <h1 className='font-bold capitalize text-neutral-800 font-sans text-7xl'>Delicious food is <br /> wating for you</h1>     
        <p className='text-2xl py-30 capitalize font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae autem sed eum, neque illum quasi! Tempora eos eius iste laborum.</p>
        <Herobutton/>
    </div>
  )
}

export default lefttxt