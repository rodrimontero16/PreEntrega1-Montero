import './App.css';
import Swal from 'sweetalert2';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import { useState } from 'react';


function App() {
  const [contador, setContador] = useState(0)

  const handleClickIncrementar = () => {
    setContador (contador + 1)

    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    }).fire({
        icon: 'success',
        title: `Producto agregado`
    });
  
  }


  return (
    <>
      <header className='header'>
        <NavBar contador={contador}/>
      </header>
      <main className='main'>
        <ItemListContainer handleClickIncrementar = {handleClickIncrementar} />
      </main>
    </>
  )
}

export default App
