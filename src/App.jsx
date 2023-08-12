import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import useContador from './hooks/useContador'



function App() {
  const {contador, incrementarContador,decrementarContador} = useContador(0);


  return (
    <BrowserRouter>
        <NavBar contador={contador} />
        <Routes>
          <Route path='/' element= {<ItemListContainer incrementarContador={incrementarContador}/>} />
          <Route path='/tienda/:category' element= {<ItemListContainer incrementarContador={incrementarContador}/>}/>
          <Route path='/:category/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App