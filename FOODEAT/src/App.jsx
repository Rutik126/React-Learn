import React from 'react'
import Hero from './components/section1/hero'
import Page2 from './components/section2/page2'

const App = () => {
  const items = [
  {
    "id": 1,
    "itemName": "Veg Noodles",
    "image": "https://i.pinimg.com/1200x/21/f6/ec/21f6ec0e39f29e79e268e842957c7157.jpg",
    "rating": 9.8,
    "price": 50
  },
  {
    "id": 2,
    "itemName": "Veg Manchurian",
    "image": "https://i.pinimg.com/736x/e6/e2/8a/e6e28af46a37dcc994bd4199c0c18131.jpg",
    "rating": 9.7,
    "price": 60
  },
  {
    "id": 3,
    "itemName": "Schezwan Noodles",
    "image": "https://i.pinimg.com/736x/0e/d3/33/0ed3337c7099eac0f18da1a634a2d8c4.jpg",
    "rating": 9.6,
    "price": 70
  }
]
   
  return (
    <div className='oklch(90.1% 0.076 70.697) z-0 w-full h-screen'>
      <Hero />
      <Page2 items = {items} />
    </div>
  )
}

export default App