import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/Header/NavBar.jsx';
import Slider from './Components/Slider';
import ItemCount from './Components/ItemCount';


//@ts-check


function App() {

  return (
    <>
      <NavBar />
      <Slider />
      <ItemListContainer/>
      
    </>
  
  )
}

export default App;
