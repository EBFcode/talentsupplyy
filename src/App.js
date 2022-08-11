import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import AgregandoProductos from './Test/AgregandoProductos';
import Cart from './Components/CartContainer/Cart';
import { ThemeProvider } from '@emotion/react';
import theme from './themeconfig'
import Slider from './Components/Slider.jsx';
import Footer from './Components/Footer.jsx';

import Checkout from './Components/Checkout.jsx';

// rfc 

function App() {
  return (
      <CartProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <NavBar />

              <Routes>
                <Route path='/' element={<> <Slider /> <ItemListContainer /> </>}></Route>
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='/ingresarProductos' element={<AgregandoProductos />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>

            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
  )
}

export default App;
