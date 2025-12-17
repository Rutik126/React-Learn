import React from 'react'
import Lefttxt from './lefttxt'
import Rightimg from './rightimg'

const herocenter = () => {
  return (
    <div className='flex h-screen mx-8'>
      <img className='opacity-55 w-full h-full blur-3xl fixed' src="https://i.pinimg.com/1200x/24/a1/c5/24a1c58e10f311a2e2f491f78d1334c7.jpg" alt="" srcset="" />
        <Lefttxt/>
        <Rightimg/>
    </div>
  )
}

export default herocenter