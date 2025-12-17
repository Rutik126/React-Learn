import React from 'react'
import Navbar from './navbar'
import Herocenter from './herocenter'

const hero = () => {
  return (
    <div className='h-full'>
        {/* <img className='opacity-55 w-full blur-3xl fixed' src="https://i.pinimg.com/1200x/24/a1/c5/24a1c58e10f311a2e2f491f78d1334c7.jpg" alt="" srcset="" /> */}
        <Navbar/>
        <Herocenter/>
    </div>
  )
}

export default hero