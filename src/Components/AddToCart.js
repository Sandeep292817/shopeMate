import React from 'react'
 import { added_elements } from './CardList'
 import { Cart } from './Cart'
export const AddToCart = () => {
  
  
  return (
    <main className='flex justify-start flex-wrap other:justify-evenly max-w-7xl mx-auto py-7'>
    
      {
        added_elements.map((cardData)=>{
        console.log("from before first Map"+JSON.stringify(cardData[0]))
       
        return <Cart key={cardData[0].id} cardData={cardData[0]}/>
       //})
      })
      }
    </main>
  )
}
