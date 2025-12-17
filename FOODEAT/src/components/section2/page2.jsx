import React from 'react'
import Top from './top'
import Card from './card'

const page2 = (props) => {
// console.log(props);

  return (
    <div className=' py-8 bg-amber-50 relative'>
        <Top/>
        <div className=' justify-around flex mt-30'>
          {props.items.map(function(elem){
            return(
                <Card itemName = {elem.itemName} itemImage = {elem.image} itemPrice = {elem.price} rating = {elem.rating} />
            )
          })}
        </div>
    </div>
  )
}

export default page2