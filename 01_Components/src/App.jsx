import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <>
      <div>
        <h1>Cards</h1>
          <div className="cardBox">
            <Card user = 'Rutik'/>
            <Card user = 'Pravin'/>
          </div>
      </div>
    </>
  )
}

export default App