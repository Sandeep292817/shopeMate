

export const Cart = ({cardData,cartCount,setCartCount,handleAddedElements}) => {
    const {price,description,title,image} = cardData;
    
   const addToCartHandler=(id)=>{ 
    setCartCount(cartCount+1);  
    handleAddedElements(id); 
   }

  return (
    <main >
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
        <img className="rounded-t-lg m-1 size-52 border border-gray-200  shadow w-11/12 ml-4 my-4" src={image} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>  
    </div>
    <div className='flex mb-4'>
        <p className='text-base ml-2'>Price  ${price}</p>
        <button className='bg-sky-600 text-white rounded h-12 justify-center w-40 hover:bg-sky-400 ml-36' onClick={()=>{addToCartHandler(cardData.id)}}>Add To Cart</button>
    </div>
</div>
    </main>
  )
}
