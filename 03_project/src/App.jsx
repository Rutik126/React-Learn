import React, { useState } from 'react'

const App = () => {

  const [value, setvalue] = useState(1)
  

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Update state with the cursor's position relative to the element
    setPosition({
      x: event.clientX, // or event.pageX, event.screenX etc.
      y: event.clientY,
    });
  }

  return (
    <div className='m-20 grid justify-center  '>
      <h2 className='text-3xl text-blue-800 font-bold'>Couning Number {value} </h2>
      <div className='flex items-center'>
        <button onClick={()=>setvalue(value+1)} className='px-4 py-2 m-3 bg-amber-700 text-blue-50 rounded-2xl'>Increment</button><br />
        <button onClick={()=>setvalue(value-1)} className='px-4 py-2 m-3 bg-amber-700 text-blue-50 rounded-2xl'>Decrement</button>
      </div>
      <div
      onMouseMove={handleMouseMove}
      style={{
        height: '200px',
        width: '100%',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
      }}
    >
      <p>
        Cursor Position: X: {position.x}, Y: {position.y}
      </p>
    </div>
    </div>
  )
}

export default App