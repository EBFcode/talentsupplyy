import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar.jsx';
import Slider from './Components/Slider';
import ItemCount from './Components/ItemCount';


//@ts-check


function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <ItemListContainer greeting="Contador Con Boton"/>
      <ItemCount />
    </>
  
  )
}

export default App;
