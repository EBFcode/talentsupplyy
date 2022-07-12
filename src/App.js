import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/Header/NavBar.jsx';
import Slider from './Components/Slider';
import ItemCount from './Components/ItemCount';






function App() {

  function onAdd(e){
    let vocales = ["a","e","i","o","u"];

    vocales.includes(e.key) && e.preventDefault();

  }

  return (

    <>
      <NavBar />
      <Slider />
      <ItemListContainer/>
      <input type="text" onKeyDown={onAdd}/>

      
    </>
  
  )
}

export default App;
