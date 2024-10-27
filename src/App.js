
import { useState,createContext } from 'react';
import './App.css';
import { Header, NavBar,Footer} from './Components';

export const AppContext = createContext(null);
function App() {
  const[cartCount,setCartCount] = useState(0);
  
  return (
    <AppContext.Provider value={{cartCount,setCartCount}}>
      <Header/>
      <NavBar/>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;
