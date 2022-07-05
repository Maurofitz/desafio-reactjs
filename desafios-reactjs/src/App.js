import './App.css';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Navbar from "../src/components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailsContainer from '../src/components/ItemDetailsContainer/ItemDetailsContainer';
import Footer from '../src/components/Footer/Footer';


function App () {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="/detalle/:id" element={<ItemDetailsContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};
export default App;