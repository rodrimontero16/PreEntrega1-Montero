import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cartContext';
import { Home } from './components/Home';
import { DetalleCompra } from './components/DetalleCompra';

function App() {

  return (
      <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element= {<Home />} />
              <Route path='/tienda' element= {<ItemListContainer/>} />
              <Route path='/tienda/:category' element= {<ItemListContainer/>}/>
              <Route path='/tienda/:category/:id' element={<ItemDetailContainer/>}/>
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='/detalleCompra' element={<DetalleCompra/>}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
  )
}

export default App