import './App.css';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Navbar from "../src/components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailsContainer from '../src/components/ItemDetailsContainer/ItemDetailsContainer';
import Slider from './components/slider/Slider';
import Footer from './components/Footer/Footer';
import Cart from '../src/components/Cart/Cart'
import CartCustomProvider from '../src/components/Context/Context'

function App () {
  return (
    <BrowserRouter>
      <CartCustomProvider>
            <Navbar path="App" />
            <Slider />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detalle/:productId" element={<ItemDetailsContainer />}/>
            <Route path="/cart" element={<Cart />} />
            </Routes>
           <Footer/>
      </CartCustomProvider>    
        </BrowserRouter>
    );
};
export default App;
