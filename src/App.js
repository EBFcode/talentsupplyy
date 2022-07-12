import './App.css';
import NavBar from './Components/Header/NavBar.jsx';
import Slider from './Components/Slider';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  function onAdd(e){
    let vocales = ["a","e","i","o","u"];

    vocales.includes(e.key) && e.preventDefault();
  }

  return (

    <>
      <NavBar />
      <Slider />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
      <input type="text" onKeyDown={onAdd}/>

      
    </>
  
  )
}

export default App;
