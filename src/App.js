import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import AgregandoProductos from './Test/AgregandoProductos';
import CartWidget from './Components/CartContainer/CartWidget';

// rfc 

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>} />
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartWidget/>} /> 
          <Route path='/ingresarProductos' element={<AgregandoProductos/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
