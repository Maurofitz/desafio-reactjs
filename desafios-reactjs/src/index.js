import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from '../src/components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Slider from './components/slider/Slider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <NavBar />
      <Slider />
      <ItemListContainer/>
    </>
  </React.StrictMode>
);
