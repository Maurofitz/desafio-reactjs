import './App.css';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Navbar from "../src/components/Navbar/NavBar";
import ItemCount from "./components/ItemCount"


function App () {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting}/>
      <ItemCount/>
    </>
  );
};
export default App;