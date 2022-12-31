
import './App.css';
import Navebaar from './ShoppingModule/Navebaar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ShoppingModule/Home';
import About from './ShoppingModule/About';
import Item from './ShoppingModule/Item';
import Display from './ShoppingModule/Display';
import React from 'react' ;
import ItemCard from './ShoppingModule/ItemCard';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navebaar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="item" element={<Item/>}/>
          <Route path="itemCard" element={<ItemCard/>}/>
          <Route path="display" element={<Display/>}/>
         </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
