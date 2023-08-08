import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import useContador from './hooks/useContador';
import { useState } from 'react';



function App() {
  const {contador, incrementarContador,decrementarContador} = useContador(0);

  const [filtro, setFiltro] = useState(null); 

  const handleFiltroClick = (filtroSeleccionado) => {
    setFiltro(filtroSeleccionado);
  };

  return (
    <>
      <header className='header'>
        <NavBar contador={contador} handleFiltroClick={handleFiltroClick}/>
      </header>
      <main className='main'>
        <ItemListContainer filtro= {filtro} incrementarContador = {incrementarContador} />
      </main>
    </>
  )
}

export default App
