import React, { useContext } from 'react'

import ShoppingCart from '../Assets/shoppingCart.png';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../App';
export const Header = () => {
    const {cartCount} = useContext(AppContext);
   
  return (
    <nav className='flex h-24 bg-stone-900 border-b-2'>
        <div className='flex'>
            <NavLink to='/'>
            <img src={ShoppingCart} alt='ShoppingCart' className='h-20 rounded-full justify-center m-2'/>
            </NavLink>
            <p className='text-white text-2xl m-6'>Shopping Cart</p>
        </div>
        <div>
            <ul className='flex'>
               <li className='text-white text-2xl m-6'><NavLink to="/home">Home</NavLink></li>
               <li className='text-white text-2xl m-6'><NavLink to="/cart">My Cart</NavLink></li>
            </ul>
        </div>
        <div>
            <p className='text-white text-2xl my-6 mr-0 ml-72'>{`Cart :${cartCount}`}</p>
        </div>
    </nav>
  )
}
