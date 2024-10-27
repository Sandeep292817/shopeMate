import React ,{useContext}from 'react'
import { AppContext } from '../App';
import { Routes,Route } from 'react-router-dom';
import {AddToCart} from './index';
import { CardList } from './CardList';

export const NavBar = () => {
  const {cartCount} = useContext(AppContext);
  const {setCartCount} = useContext(AppContext);
  //const [cartAdded,setCartAdded]=useState();
 // cartAdded=cartCount;
  console.log(cartCount);

  return (
    <Routes>
        <Route element={<CardList cartCount={cartCount} setCartCount={setCartCount}/>} path=""/>
        <Route element={<CardList cartCount={cartCount} setCartCount={setCartCount}/>} path="/home"/>
        <Route element={<AddToCart/>} path="/cart"/>
    </Routes>
    
  )
}


//cartAdded={cartAdded} setCartCount={setCartCount}