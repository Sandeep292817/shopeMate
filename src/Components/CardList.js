import React, { useEffect, useState } from 'react'
import { Cart } from './Cart';

export const added_elements = [];
export const CardList = ({cartCount,setCartCount}) => {
    const [cardList,setCardList] = useState([]);
    //const [mainData,setMainData] = useState([]);
    //const [added_ele,setAdded_ele] = useState();
    
    const url = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(url);
            const json = await response.json();
            setCardList(json)
           // console.log("From AddToCart file"+JSON.stringify(json))
        }
        fetchData();
    },[]);
    const handleAddedElements=(id)=>{
      const data = cardList.filter((dt)=>{return dt.id===id});
      //console.log("Before adding elements into add elements"+added_ele)
      console.log("The data is "+JSON.stringify(data))
     // setAdded_ele(...added_ele,data);
      added_elements.push(data);
      //console.log("The Added elements are "+JSON.stringify(data));
      console.log("After adding elements into add elements"+JSON.stringify(added_elements))
    }
  return (
    <main className='flex justify-start flex-wrap other:justify-evenly max-w-7xl mx-auto py-7'>
        {cardList.map((cardData)=>{
           return <Cart key={cardData.id} cardData={cardData} cartCount={cartCount} setCartCount={setCartCount} handleAddedElements={handleAddedElements}/>
        })}
    </main>
  )
}
