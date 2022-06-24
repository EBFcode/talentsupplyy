import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar.jsx';
import Slider from './Components/Slider';
//@ts-check


function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <ItemListContainer greeting="Cumpliendo con Desafios"/>
    </>
  
  )
}

export default App;
